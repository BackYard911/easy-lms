import axios from "axios";


export async function getAllCourse(){
  const res = axios.get(`https://easy-lms.herokuapp.com/api/v1/courses`)
  return res;
}

export async function getCourse(id){
  const res = axios.get(`https://easy-lms.herokuapp.com/api/v1/courses/${id}`);
  return res;
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

export async function addStudent(email,courseId){
  let res;
  try {
    res = await axios.post(`https://easy-lms.herokuapp.com/api/v1/courses/${courseId}/students`,{
      email
    });
    window.alert("Student added successfully");
  } catch (error) {
    console.log("something went wrong");
  }
}