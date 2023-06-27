import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const [display, setDisplay] = useState("hidden");
  const [menuBtn, setMenu] = useState(<i className="bi bi-list"></i>);
  const [searchActive, setSearch] = useState("hidden");
  const { isLogin, setLogin } = useContext(AuthContext);

  const clickHandler = () => {
    if (display === "hidden") {
      setDisplay("block");
      setMenu(<i class="bi bi-x"></i>);
    } else {
      setDisplay("hidden");
      setMenu(<i className="bi bi-list"></i>);
    }
  };
  const searchClickHandler = () => {
    if (searchActive === "block") {
      setSearch("hidden");
    } else {
      setSearch("block");
    }
  };

  const childClickHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="container  sm:text-center p-4 box-border">
        <Link
          to="/"
          className="text-4xl sm:text-center   sm:float-none sm:block sm:w-full text-red-700 hover:text-black duration-500 "
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Nubia
        </Link>

        <button
          className=" float-right sm:hidden text-4xl  "
          onClick={clickHandler}
        >
          {menuBtn}
        </button>
        <nav className=" mt-2 px-5  grid grid-cols-4 xl:grid-cols-8 justify-center   bg-white">
          <p className=" h-px relative top-1/2  content[''] bg-slate-500 col-span-1 xl:col-span-3 hidden sm:inline-block"></p>
          <ul
            className={`sm:inline-flex justify-center text-center sm:space-x-3 col-span-full sm:col-span-2  xl:col-span-2 ${display}  block `}
          >
            <li className="hover:text-red-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-500">
              <Link to="/about">About</Link>
            </li>
            {isLogin && <li className="hover:text-red-500">
              <Link to="/admin">Admin</Link>
            </li>}
            <li className="hover:text-red-500">
             {isLogin ? <button
                  onClick={() => {
                    if (isLogin) {
                      setLogin(!isLogin);
                      localStorage.removeItem("isLoggedIn");
                    }
                  }}
                >
                  Logout
                </button> : <Link to="/login">Sign In</Link>}
            </li>
            <li className="hover:text-red-500">
              <button onClick={searchClickHandler}>
                <i class="bi bi-search"></i>
              </button>
            </li>
            
          </ul>
          <p className=" h-px relative top-1/2  content[''] bg-slate-500 col-span-1 xl:col-span-3 hidden sm:inline-block"></p>
        </nav>
      </div>

      {/* Search Bar */}

      <div
        className={`  fixed ${searchActive}  h-full w-full bg-white top-0 bottom-0 left-0 right-0 text-center z-20 justify-center `}
        onClick={searchClickHandler}
      >
        <div
          className="inline-block    p-2 m-5 bg-slate-100 box-border"
          onClick={childClickHandler}
        >
          <i class="bi bi-search"></i>
          <input
            type="search"
            className="  p-5 outline-none box-border bg-slate-100 placeholder:text-xl placeholder:font-medium"
            placeholder="Type to Search"
          />
        </div>
        <button
          className="absolute top-2 right-3 hover:rotate-90 duration-300 bg-slate-100 rounded-full p-3 opacity-50 hover:opacity-100"
          onClick={searchClickHandler}
        >
          <i className="bi bi-x text-4xl"></i>
        </button>
      </div>
    </>
  );
};

export default Header;
