import axios from "axios";

axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}


export function getAllCourse(){
  axios.get(`https://easy-lms.herokuapp.com/api/v1/courses`
  ).then(res =>{
    console.log(res);
    console.log("aloo")
  });
  
}