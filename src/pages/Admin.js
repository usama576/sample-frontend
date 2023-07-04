import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate } from "react-router-dom";

const Admin = () => {
  const { isLogin } = useContext(AuthContext);
  // const isLogin  = sessionStorage.getItem("isLoggedIn")==="true"
  if (isLogin) {
    return (
      <>
        {" "}
        <div className="h-[90vh] text-center pt-5">
          <div>
            <h1>Admin Page</h1>
            <Link
              to="/write"
              className="block  m-2 bg-slate-500 dark:bg-slate-800 p-3 rounded-lg"
            >
              Write Blog
            </Link>
            <Link
              to="/update"
              className="block m-2 bg-slate-500 dark:bg-slate-800 p-3 rounded-lg"
            >
              Update Blog
            </Link>
            <Link
              to=""
              className="block m-2 bg-slate-500 dark:bg-slate-800 p-3 rounded-lg"
            >
              Delete Blog
            </Link>
          </div>
        </div>{" "}
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
