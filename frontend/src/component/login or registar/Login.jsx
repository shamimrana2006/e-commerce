import React from "react";

function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-200 text-white">
      <form
        action="#"
        className="w-18 grid rounded-xl items-center text-black gap-2 text-center bg-white px-10 py-5"
      >
        <h1  className="font-bold tilte text-green-400 font-mono">Login</h1>
        <input
          type="text"
          name="email"
          className="outline-none p-2 rounded border-2 border-gray border-solid"
          placeholder="Enter your email"
        />
        <input
          type="text"
          name="password"
          className="outline-none p-2 rounded border-2 border-solid"
          placeholder="password"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
  