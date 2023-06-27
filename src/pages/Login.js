import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInput] = useState({
    email: "",
    password: "",
  });
  const [users, setUser] = useState();
  const [erroeMessage , setError] = useState("")
  const { isLogin, setLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:5000/users");
      // console.log(response.data);
      setUser([...response.data]);
      // console.log(users);
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
    const loginUser = users.find((element) => {
      return (
        element.email === inputs.email && element.password === inputs.password
      );
    });
    console.log(loginUser);
    if (loginUser) {
      setLogin(true);
      setError('');
      localStorage.setItem("isLoggedIn", "true");

      // alert("Logged In succesfully");
      navigate("/");
    } else {
      setError(<p className=" text-red-400 text-center m-2">Wrong email or password</p>);
    }
  };

  return (
    <>
      <div className="  grid  justify-center align-middle  container">
        {isLogin ? (
          <div className="p-10 text-xl h-[60vh]">Already Logged In</div>
        ) : (
          <form className=" items-center p-10 border  h-[60vh]" onSubmit={submitHandler}>
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
              className="border-x-0 block focus:border-red-300 border-b-2 box-border m-2 outline-none "
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
              className="border-x-0 focus:border-red-300 border-b-2 box-border m-2 outline-none "
            ></input>
            <button className="block bg-slate-400 p-3 rounded-md" type="submit">
              Log In
            </button>
            {erroeMessage}
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
