import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [inputs, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [erroeMessage, setError] = useState("");
  const { isLogin} = useContext(AuthContext);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput((preval) => {
      return { ...preval, [name]: value };
    });
    //  console.log(inputs)
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://127.0.0.1:8000/create", inputs);
      
      if (data.success) {
        console.log("User registered")
        navigate("/login");
      } else {
        setError(
          <p className=" text-red-400 text-center justify-center w-full">
            User Already Registered{" "}
          </p>
        );
      }
    } catch (error) {
      console.log(error);
      setError(
        <p className=" text-red-400 text-center justify-center w-full">
          Server Error{" "}
        </p>
      );
    }
  };

  return (
    <>
      <div className="  grid  justify-center align-middle  container dark:bg-black">
        {isLogin ? (
          <div className="p-10 text-xl h-[60vh]">Already Logged In</div>
        ) : (
          <form
            className=" items-center p-10 border  h-[60vh]"
            onSubmit={submitHandler}
          >
            <label for="name" className="text-xl">
              Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={inputs.name}
              onChange={changeHandler}
              placeholder="Type Name"
              className="border-x-0 block focus:border-red-300 dark:border-slate-900 border-b-2 box-border m-2 outline-none dark:bg-black "
              required
            ></input>
            <label for="email" className="text-xl">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={inputs.email}
              onChange={changeHandler}
              placeholder="Type Email"
              className="border-x-0 block focus:border-red-300 dark:border-slate-900 border-b-2 box-border m-2 outline-none dark:bg-black "
              required
            ></input>

            <label for="password" className="block text-xl">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={inputs.password}
              onChange={changeHandler}
              placeholder="Type Password"
              required
              className="border-x-0 focus:border-red-300 border-b-2  dark:border-slate-900 box-border m-2 outline-none dark:bg-black "
            ></input>
            <button
              className="block bg-slate-400 dark:bg-slate-900 p-3 mt-1 rounded-md"
              type="submit"
            >
              Register
            </button>
            <br />

            {erroeMessage}
          </form>
        )}
      </div>
    </>
  );
};

export default Register;
