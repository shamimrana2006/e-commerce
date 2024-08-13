import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Verification() {
  const {message ,email} = useLocation().state
  const api = import.meta.env.VITE_urls

  //error result useState
  const [result, setResult] = useState();
  const [user_data, setUser_data] = useState({
    otp: "",
    email
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser_data((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(()=>{
    setResult(message)
    setTimeout(() => {
      setResult("")
    }, 2000);
  },[])
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${api}api/user/registar/verify/otp`,
        user_data
      );
      console.log(res);

      setResult(res.data.message);
    } catch (error) {
      return setResult(error.response.data.message);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-200 text-white">
      <span className="text-right text-black">{result}</span>
      <form
        onSubmit={submit}
        className="w-18 grid rounded-xl items-center text-black gap-2 text-center bg-white px-10 py-5"
      >
        <h1 className="font-bold tilte text-green-400 font-mono">
          Email varification
        </h1>
        <input
          type="text"
          name="otp"
          onChange={handleChange}
          className="outline-none p-2 rounded border-2 border-solid"
          placeholder="Enter you OTP code "
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl"
        >
          Verification
        </button>
      </form>
    </div>
  );
}

export default Verification;
