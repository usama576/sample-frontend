import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Admin = () => {
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  if (isLogin) {
    return (
      <>
        {" "}
        <div>Admin Page</div>{" "}
      </>
    );
  } else {
    return <><Navigate to='/login' replace /></>;
  }
};

export default Admin;
