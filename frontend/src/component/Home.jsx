import axios from "axios";
import React, { useEffect, useState } from "react";
import Loadings from "./loading/Loadings";
import Login from "./login or registar/Login";
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
        <button className="p-2 text-sm  rounded-lg bg-blue-200" onClick={reset_user}>Reset User</button>
      </div>
      </div>
      <Login />
    </div>
  );
}

export default Home;
