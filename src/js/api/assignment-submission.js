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
    const result = await res.json();
    if (result.message === "ERROR"){
      throw new Error(result.errors);
    }
    window.alert("assignment submitted successfully");
  } catch (error) {
    window.alert(error);
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

export async function gradeSubmission(points,submissionId){
  let res;
  try {
    res = await axios.post(`https://easy-lms.herokuapp.com/api/v1/submissions/${submissionId}`,{
      points,
    })
    window.alert("Assignment graded successfully")
  } catch (error) {
    window.alert("something went wrong");
  }
  return res;
}

export async function getFile(submissionId){
  let res;
  try {
    res = await axios.get(`https://easy-lms.herokuapp.com/api/v1/submissions/${submissionId}/file`,{
      responseType: 'blob'
    })
    return window.URL.createObjectURL(new Blob([res.data],{type:'application/pdf'}));
  } catch (error) {
    window.alert("something went wrong")
  }
  return "sad";
}