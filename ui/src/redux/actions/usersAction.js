import axios from "axios";
import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL, SIGN_UP } from "../types";

export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const createUser = (user) => async (dispatch) => {
  console.log("wanini");
  console.log(user);
  const { firstname, lastname, email, password, confirmpassword } = user;
  try {
    dispatch({
      type: SIGN_UP,
    });
    const { data } = await axios.post(
      "http://localhost:9000/api/registration",
      { firstname, lastname, email, password, confirmpassword }
    );

    console.log(data);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: {
        message: "sign up was successful",
        data: data,
      },
    });
    // })
    // .then((res) => {
    //   console.log(res.data);
    // });
  } catch (error) {
    console.log("jo");
    console.log(error);
    dispatch({
      type: GET_USER_FAIL,
      payload: error.message,
      message: "An error occured when registering",
    });
  }
  // return {

  // };
};
// export const getProjects = data = async (dispatch) => {
//   dispatch({
//     type: GET_PROJECT_REQUEST,
//   });

//   let { data } = await axios.post("http://localhost:9000/api/login", data);

//   dispatch({
//     type: GET_PROJECT_SUCCESS,
//     payload: data
//   })
// });

// export const getUserSuccess = (user) => {
//   console.log(user);
//   return {
//     type: GET_USER_SUCCESS,
//     payload: user,
//   };
// };

// export const getUserFail = (error) => {
//   return {
//     type: GET_USER_FAIL,
//     payload: error,
//   };
// };

// export const getUserRequest = (data) => (dispatch) => {
//   dispatch(getUser());
//   axios
//     .post("http://localhost:9000/api/login", { data })
//     .then(({ data }) => dispatch(getUserSuccess(data)))
//     .catch(({ message }) => dispatch(getUserFail(message)));
// };
