import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(callback){
    localStorage.setItem("authenticated",true);
    axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}
    this.authenticated = true;
    callback();
  }

  logout(callback){
    localStorage.removeItem("authenticated");
    localStorage.removeItem("token");
    this.authenticated = false;
    callback();
  }

  isAuthenticated(){
    this.authenticated = localStorage.getItem("authenticated");
    return this.authenticated;
  }
}

export default new Auth();