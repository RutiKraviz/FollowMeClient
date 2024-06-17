import axiosInstance from "../api";


const signIn = (user) => {

  return dispatch => {
    
    axiosInstance.post('/Coustemer/Login', user).then(response => {
      console.log(response)
      return response.data;
    }).catch(err => {

    })
  }
};


const logInTest = (user) => {
  const id = 3;
  return dispatch => {

    axiosInstance.get(`Coustemer?id=${id}`).then(x => {
      console.log(x)
      dispatch({ type: "USER", payload: x.data })
    }).catch(error => {
      console.log(error);
    })
  }
};
const logIn = (user) => {
  return dispatch => {

    const response = axiosInstance.post('/login', user).then(x => {

      dispatch({ type: "USER", payload: response.data })
    }).catch(error => {
      console.log(error);
    })
  }
};

export { signIn, logIn, logInTest };
