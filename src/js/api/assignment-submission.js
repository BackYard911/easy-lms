import axios from "axios";

export async function addSubmission(assId, formData){
  let res;
  try {
    res = await fetch(`https://easy-lms.herokuapp.com/api/v1/assignments/${assId}/submissions`,{
      method: "POST",
      body: formData,
      headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
  }
    );
    window.alert("assignment submitted successfully");
  } catch (error) {
    window.alert("something went wrong");
  }
  return res;
}

export async function getSubmissions(assId){
  let res;
  try {
    res = await axios.get(`https://easy-lms.herokuapp.com/api/v1/assignments/${assId}/submissions`)
  } catch (error) {
    window.alert("something went wrong");
  }
  return res;
}