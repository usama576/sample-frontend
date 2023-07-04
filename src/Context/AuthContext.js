import Cookies from "js-cookie";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const isLoggedIn = Cookies.get("isLoggedIn")=== "true" 
  // sessionStorage.getItem("isLoggedIn") === "true";
  const [isLogin, setLogin] = useState(isLoggedIn);
  
  const children = props.children;

  return (
    <AuthContext.Provider value={{ isLogin, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
