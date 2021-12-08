import axios from "axios";

export async function login(username,password){
  let state;
  try {
    const res = await axios.post("https://easy-lms.herokuapp.com/api/v1/auth/login",{
    username,
    password
  })
  
    localStorage.setItem("token",res.data.data.token)
    localStorage.setItem("userData", res.data.data)
    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("userData"));
    console.log(res)
    state = 1;
  } catch (error) {
    console.log("wrong credentials")
    state = 0;
  
}
return state;
}

export async function signup(name,email,password,role){
  let state;
  try {
    const res = await axios.post("https://easy-lms.herokuapp.com/api/v1/auth/signup",{
      name,
      email,
      password,
      role
    })
    state = 1;
  } catch (error) {
    console.log(error)
    state=0
  }
  return state;
}