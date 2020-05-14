import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Header from './Header/Header'
import Middle from './MiddleContent/Middle'
import Footer from './Footer/Footer'

// const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=D72XwSwTMucO7M6CgEoV4FbqXF4rLbdh0JWSgBxb`)
      .then(res => {
        console.log(res)
        setNasaData(res.data)
      })
      .catch(error => {
        console.log('there was an error', error) 
      })
    }, [])
  return (
    
    <div className="App">
      <div className="header-container">
        <Header date={nasaData.date}/>
      </div>
      <div className="middle-container">
        <Middle title={nasaData.title} hdurl={nasaData.hdurl} explanation={nasaData.explanation}/>
      </div>
      <div className="bottom-container">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;



