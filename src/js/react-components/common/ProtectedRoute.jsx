import React  from "react";
import { Navigate, Outlet } from "react-router";
import auth from "../../consts/auth";



function ProtectedRoute({component: Component, ...rest}){
  const authState = auth.isAuthenticated();
  console.log(authState);
  return authState ? <Outlet/> : <Navigate to="/login" />
}

export default ProtectedRoute;