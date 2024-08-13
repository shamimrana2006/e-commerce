import axios from "axios";
import React, { useEffect, useState } from "react";
import Loadings from "./loading/Loadings";
import Register from "./login or registar/registar";
import { Link } from "react-router-dom";
// import Loadings from "./loading/Loadings";


function Home() {
  const [name, setname] = useState("");
  const [loading, setLoading] = useState(true);
  const [res , setRes] = useState("")
  const urls = import.meta.env.VITE_urls+"reset/users/seed"
  const reset_user = async()=>{
    

    await console.log(urls);
    const responsed =  await axios.get(urls)
    setRes(responsed.data.message)
    
    
  }

  useEffect(() => {
    

    const fetched = async () => {
      await fetch(import.meta.env.VITE_urls)
        .then((res) => res.json())
        .then((data) => setname(data.name));

       
    }; 
    fetched()
   
  }, []);

  return (
    <div>
       
      
      <div className="flex fixed w-screen top-0 right-0 justify-between items-center p-2">
     <span> {name}</span>
      <div className=" flex justify-end flex-row items-center">
        <span className="mr-2 text-green-500">{res}</span>
        <button className="text-black py-1 px-3 bg-gray-300 border rounded"><Link to="/user/login  ">Login</Link></button>
        <button className="text-black py-1 px-3 bg-gray-300 border rounded"><Link to="/user/register ">Register</Link></button>
      </div>
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-200 text-white">
        <h2 className="uppercase text-gray-500 ">
          welcome
        </h2>
        <button className="p-2 text-sm  rounded-lg bg-blue-200" onClick={reset_user}>Reset User</button>
       
      </div>
    </div>
  );
}
 
export default Home;
