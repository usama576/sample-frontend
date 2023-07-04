import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-black text-white">
        <div className="  inline-flex  ml-3">
          <button className="hover:bg-red-500 focus:bg-green-700  p-3">
            Home
          </button>
          <button className="hover:bg-red-500 focus:bg-green-700  p-3">
            About
          </button>
          <button className="hover:bg-red-500 focus:bg-green-700  p-3">
            News
          </button>
        </div>
        <div className="  inline-flex float-right mr-5">
          <button className="hover:bg-red-500 focus:bg-green-700  p-3 ">
            Contact Us
          </button>
          <button className="hover:bg-red-500 focus:bg-green-700  p-3 ">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
