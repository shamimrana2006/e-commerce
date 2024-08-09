import axios from "axios";
import React, { useEffect, useState } from "react";
import Loadings from "./loading/Loadings";
import Login from "./login or registar/Login";
// import Loadings from "./loading/Loadings";


function Home() {
  const [name, setname] = useState("");
  const [loading, setLoading] = useState(true);

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
      
      {name}
      <Login />
    </div>
  );
}

export default Home;
