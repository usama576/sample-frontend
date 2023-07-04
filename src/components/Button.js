import React from "react";

const Button = (props) => {
  return (
      <button className="text-center p-2 transition-all ease-in-out duration-500 text-sm tracking-widest items-center">
        {props.name}
      </button>
    
  );
};

export default Button;
