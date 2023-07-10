import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Admin = () => {
  const { isLogin ,setLogin} = useContext(AuthContext);

  const deleteUser=async ()=>{
    alert("Are you sure you want to delete your account")
    const user_id = Cookies.get("user_id");
    const {data} = await axios.delete(`http://127.0.0.1:8000/delete/${user_id}`)
      if(data.success){
        setLogin(false);
      Cookies.remove("isLoggedIn");
      Cookies.remove("user_id");
      } else {
        alert("Some error Data not deleted")
      }
  }

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
            <Link
              to="/update-user"
              className="block m-2 bg-slate-500 dark:bg-slate-800 p-3 rounded-lg"
            >
              Update your Data
            </Link>
            <Link
              to=""
              className="block mx-2 bg-slate-500 dark:bg-slate-800  rounded-lg  "
            >
              <button className="w-full p-3 " onClick={deleteUser}>Delete Your Account</button>
            </Link>
          </div>
        </div>{" "}
      </>);
  } else {
    return (
      <>
        <Navigate to="/login" replace />
      </>
    );
  }
};

export default Admin;
