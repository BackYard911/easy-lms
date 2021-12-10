class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(callback){
    localStorage.setItem("authenticated",true);
    this.authenticated = true;
    callback();
  }

  logout(callback){
    localStorage.removeItem("authenticated");
    this.authenticated = false;
    callback();
  }

  isAuthenticated(){
    this.authenticated = localStorage.getItem("authenticated");
    return this.authenticated;
  }
}

export default new Auth();