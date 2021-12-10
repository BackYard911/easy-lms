import axios from "axios";

axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}


export function getAllCourse(){
  axios.get(`https://easy-lms.herokuapp.com/api/v1/courses`
  ).then(res =>{
    console.log(res);
    console.log("aloo")
  });
  
}

export async function addCourse(title,description){
  let res;
  try {
    res = await axios.post("https://easy-lms.herokuapp.com/api/v1/courses",{
      title,
      description
    })
    console.log(res)
    window.alert("Course added successfully");
  } catch (error) {
    window.alert("something went wrong");
    res = "sad";
    console.log(error);
  }
  return res;
}