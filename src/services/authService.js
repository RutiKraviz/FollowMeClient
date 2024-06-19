import { useNavigate } from "react-router-dom";
import axiosInstance from "../api";



const signIn = (user) => {
 // const navigate = useNavigate();

  return dispatch => {
    
    axiosInstance.get('/User', user).then(response => {
      console.log(response)
      if(response.data.Role == "Driver")
      
    //  navigate("/Map");
      return response.data;
    }).catch(err => {

    })
  }
};


const logInTest = (user) => {
  const id = 4;
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

const SaveDetails = (user) => {
return dispatch => {
  const response = axiosInstance.post('/Coustemer', user).then(x => {
 
  }).catch(error => {
    console.log(error)
  })
}
};

export { signIn, logIn, logInTest, SaveDetails };
