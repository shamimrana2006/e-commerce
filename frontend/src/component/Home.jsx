import axios from "axios";
import React, { useEffect, useState } from "react";
import Loadings from "./loading/Loadings";
// import Loadings from "./loading/Loadings";


function Home() {
  const [name, setname] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("shamim rana");
    console.log(Boolean(loading));

    const fetched = async () => {
      await fetch(import.meta.env.VITE_urls)
        .then((res) => res.json())
        .then((data) => setname(data.name));
       setLoading(false)
    };
    fetched();
  }, []);

  return (
    <div>
      
      {loading ? <Loadings /> : false }
      <h1 className="text-green-500 text-center text-bold uppercase font-semibold text-7xl">
        {name} <br /> <hr /> tui ki korbi kor{" "}
      </h1>
    </div>
  );
}

export default Home;
