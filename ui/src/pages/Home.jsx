import React from "react";
import axios from "axios";

function Home() {
  let token = localStorage.getItem("token");
  // if (token == 'undefined') return console.log(token);

  //   const handleOnclick = async (e) => {
  //     console.log(token);
  //     let config = { headers: { Authorization: `${token}` } };
  //     await axios
  //       .get("http://localhost:9000/api/getusers", config)
  //       .then((res) => {
  //         console.log(res.data);
  //       });
  //   };

  return (
    <>
      <h5>Homepage</h5>
      {/* <button type="submit" onClick={(e) => handleOnclick()}> */}
      <button>joann</button>
    </>
  );
}

export default Home;
