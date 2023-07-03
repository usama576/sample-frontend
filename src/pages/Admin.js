import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const { isLogin } = useContext(AuthContext);
  // const isLogin  = sessionStorage.getItem("isLoggedIn")==="true"
  if (isLogin) {
    return (
      <>
        {" "}
        <div className="h-[90vh] text-center pt-5">Admin Page</div>{" "}
      </>
    );
  } else {
    return (
      <>
        <Navigate to="/login" replace />
      </>
    );
  }
};

export default Admin;
