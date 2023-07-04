import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [isActive, setActive] = useState("block");
  const navigate = useNavigate();
  const clickHandler = () => {
    setActive("hidden");
    navigate("/about");
  };
  return (
    <div
      className={` fixed ${isActive} h-full w-screen bg-slate-500 top-0 bottom-0 left-0 right-0 text-center z-20 justify-center `}
    >
      <input type="search" className="absolute top-1/2 left-1/2   " />
      <button className="absolute top-0 right-0" onClick={clickHandler}>
        <i className="bi bi-x text-4xl"></i>
      </button>
    </div>
  );
};

export default Search;
