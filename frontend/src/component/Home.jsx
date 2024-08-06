import axios from "axios";
import React, { useEffect, useState } from "react";
import fetched_url  from "./urls";

function Home() {
  const [name, setname] = useState({});
  useEffect(() => {
    const fetched =async()=>{
     await fetch(fetched_url)
        .then((res) => res.json())
        .then((data) => setname(data.name));
    } 
    fetched()

    console.log(name , "this is first rendering");
    
  }, []);
  return (
    <div> 
      <h1 className="text-green-500 text-center text-bold">shaadfim </h1>
    </div>
  );
}

export default Home;
