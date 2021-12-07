const sql = require("mssql");

const config = require("./dbconfig");

const connection = async () => {
  let pool = null;
  try {
    // console.log(config);
    pool = sql.connect(config);
  } catch (error) {
    pool = null;
    console.log("Error: ", error);
  }
  return pool;
};

const createRequest = async (request, params = {}) => {
  const keys = Object.keys(params);

  keys.map((keyName) => {
    const keyValue = params[keyName];
    request.input(keyName, keyValue);
  });
  return request;
};

const execution = async (procedureName, params = {}) => {
  const requestProc = await connection();
  let request = await requestProc.request();
  request = await createRequest(request, params);

  const results = await request.execute(procedureName);
  return results;
};

const querying = async (query) => {
  const ourPool = await connection();
  const results = ourPool.request().query(query);
  return results;
};
module.exports = {
  query: querying,
  execute: execution,
};
