import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from './Header/Header.js'
import Image from './Header/image.js'


// const url = "https://api.nasa.gov/planetary/apod";
// const api_key = "sYxJi14Zx77GNtuj82t3ltfigLHWSP8O5VeE0fry"



function App() {
const [nasaData, setNasaData] = useState([])




useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=sYxJi14Zx77GNtuj82t3ltfigLHWSP8O5VeE0fry')
  .then(res => {
    console.log(res)
    setNasaData(res.data);
    
  });
  
}, []);

// console.log(nasaData);

  return (
    <div className="App">
      <div className="top_content">
        <Header title={nasaData.title} date={nasaData.date} />
        <div>
          <Image  hdurl={nasaData.hdurl}/>
        </div>
        </div>
        <div className="bottom_content">
          <p className='explanation'>
            {nasaData.explanation};
          </p>
        </div>
    </div>
  );
}

export default App;
