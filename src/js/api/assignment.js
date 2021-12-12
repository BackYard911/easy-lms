import axios from "axios";

axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}

export async function addAssignment(title,description,points,deadline,courseId){
  let res;
  try {
   res = await axios.post(`https://easy-lms.herokuapp.com/api/v1/courses/${courseId}/assignments`,{
    title,
    description,
    points,
    deadline
  })
  
  window.alert("assignment added successfully")


  } catch (error) {
    window.alert("something went wrong")
  }
  return res;
}


export async function getAssignments(courseId){
  let res;
  try {
    res = await axios.get((`https://easy-lms.herokuapp.com/api/v1/courses/${courseId}/assignments`));
  } catch (error) {
    window.alert("something went wrong");
  }
  return res;
}

export async function getAssignment(assId){
  let res;
  try {
    res = await axios.get((`https://easy-lms.herokuapp.com/api/v1/assignments/${assId}`));
  } catch (error) {
    window.alert("something went wrong");
  }
  return res;



}