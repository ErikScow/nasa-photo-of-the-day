import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"

//import components
import Header from "./Components/Header"
import Card from "./Components/Card"

function App() {

  //setting up state for the data
  const [data, setData] = useState('waiting for data')

  
  //useEffect to call the data upon first render
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        console.log(response.data)
        setData(response.data)
      })
      .catch(error => console.log(error))
  }, [])
  
  console.log(data)
  
  return (
    <div className="App">
      <Header />
      <Card data={data}/>
    </div>
  );
}

export default App;
