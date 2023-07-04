import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [inputs, setInput] = useState({
    email: "",
    password: "",
  });
  const [users, setUser] = useState();
  const [erroeMessage, setError] = useState("");
  const [remember, setRemember] = useState(false);
  const { isLogin, setLogin } = useContext(AuthContext);
  console.log(remember);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        // console.log(response.data);
        setUser([...response.data]);
        // console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput((preval) => {
      return { ...preval, [name]: value };
    });
    //  console.log(inputs)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const loginUser = users.find((element) => {
        return (
          element.email === inputs.email && element.password === inputs.password
        );
      });
      console.log(loginUser);
      if (loginUser) {
        setLogin(true);
        setError("");
        // sessionStorage.setItem("isLoggedIn", "true");
        let ineOneMinute = new Date(new Date().getTime() + 60 * 60 * 1000);
        Cookies.set("isLoggedIn", "true", { expires: ineOneMinute, path: "/" });
        // if(loginUser.remember === true){
        //   sessionStorage.setItem("remember", "true")
        // } else if(loginUser.remember === false){
        //   sessionStorage.removeItem("remember")
        // }

        // alert("Logged In succesfully");
        navigate("/");
      } else {
        setError(
          <p className=" text-red-400 text-center justify-center w-full">
            Wrong user credentials{" "}
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
              className="block bg-slate-400 dark:bg-slate-900 p-3 rounded-md"
              type="submit"
            >
              Log In
            </button>
            <br />
            {/* <input
              type="checkbox"
              value="true"
              id="check"
              onChange={() => {
                if (remember === false) {
                  setRemember(true);
                  localStorage.setItem("remmember", true);
                } else {
                  setRemember(false);
                  localStorage.setItem("remmember",false);
                }
              }}
            />
            <label htmlFor="check" className="px-2 pt-0">
              Remember Me
            </label> */}
            {erroeMessage}
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
