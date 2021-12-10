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
    this.authenticated = false;
    callback();
  }

  isAuthenticated(){
    return this.authenticated;
  }
}

export default new Auth();