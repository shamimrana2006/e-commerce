import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const api = import.meta.env.VITE_urls;
  //error result useState
  const [result, setResult] = useState();
  const [user_data, setUser_data] = useState({
    name: "",
    email: "",
    password: "",
    again_password: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser_data((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}api/user/registar/`, user_data);
      console.log(res);

      setResult(res.data.message);
      const navidate_data = { message: res.data.message, email: user_data.email}
     
      navigate("/user/register/verification", { state: navidate_data});
    } catch (error) {
      console.log(error);
      
      
      return setResult(error.response.data.message);
    }
  };

  useEffect(()=>{
    setTimeout(() => {
      setResult("");
      console.log("shamim it work");
      
    }, 1000);
  },[result])

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-200 text-white">
      <span className="text-right text-black">{api}</span>
      <span className="text-right text-black">{result}</span>
      <form
        onSubmit={submit}
        className="w-18 grid rounded-xl items-center text-black gap-2 text-center bg-white px-10 py-5"
      >
        <h1 className="font-bold tilte text-green-400 font-mono">Register</h1>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="outline-none p-2 rounded border-2 border-solid"
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="outline-none p-2 rounded border-2 border-gray border-solid"
          placeholder="Enter your email"
        />
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          className="outline-none p-2 rounded border-2 border-gray border-solid"
          placeholder="Enter your Phone or contact no."
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="outline-none p-2 rounded border-2 border-gray border-solid"
          placeholder="Create new password"
        />
        <input
          type="password"
          name="again_password"
          onChange={handleChange}
          className="outline-none p-2 rounded border-2 border-gray border-solid"
          placeholder="Retype password"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
