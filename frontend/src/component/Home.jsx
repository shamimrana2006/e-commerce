import axios from "axios";
import React, { useEffect, useState } from "react";





function Home() {
  const [name, setname] = useState("");

  
  useEffect(() => {
    const fetched =async()=>{
     await fetch(import.meta.env.VITE_urls)
        .then((res) => res.json())
        .then((data) => setname(data.name));
    } 
    fetched()
    
  }, []);
  
  return (
    <div> 
      <h1 className="text-green-500 text-center text-bold uppercase font-semibold text-7xl">{name} </h1>
    </div>
  );
}

export default Home;
