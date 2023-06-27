import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="m-0 bg-slate-50 p-10 w-full absolute ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-4 ">
        <div>
          <h1 className="font-medium my-4">Tags</h1>
          <div>
            <a href="" className="block py-1 pointer-events-none hover:text-red-800">
              Frontpage
            </a>
            <a href="" className="block py-1 pointer-events-none hover:text-red-800">
              Jakyll
            </a>
            <a href=""  className="block py-1 pointer-events-none hover:text-red-800">
              Blog
            </a>
          </div>
        </div>
        <div>
          <h1 className="font-medium my-4">Navigation</h1>
          <div>
            <Link to="/" className="block py-1 hover:text-red-800">
              Home
            </Link>
            <Link to="/about" className="block py-1 hover:text-red-800">
              About
            </Link>
            <Link to="/styleguide" className="block py-1 hover:text-red-800">
              Style Guide
            </Link>
          </div>
        </div>
        <div className="sm:col-span-2 lg:col-span-1 lg:grid lg:grid-cols-2">
          <h1 className="font-medium my-4 lg:col-span-2">Newsletter</h1>
          <div className="bg-white justify-center items-center px-6">
            <input
              type="email"
              placeholder="Email"
              className=" p-4 w-full block  items-center border-0 border-b focus:border-red-500 outline-none"
            />
          </div>
          <div className="container p-5 lg:p-4 justify-center bg-white  items-center text-center">
            <button className="text-center bg-pink-700 text-white w-full  hover:opacity-90 duration-500  px-8 py-4  text-sm tracking-widest items-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="mx-4" />
      <div className="py-6 text-center justify-center mb-5">
        <div className="sm:float-left sm:inline-block text-xs pb-2">
          2022 Nubia
        </div>
        <div className=" space-x-3 sm:float-right sm:inline-block pb-2">
          <a href="#">
            <i className="bi bi-facebook text-blue-700"></i>
          </a>
          <a href="#">
            <i className="bi bi-twitter text-sky-500"></i>
          </a>
          <a href="#">
            <i className="bi bi-instagram text-slate-500"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
