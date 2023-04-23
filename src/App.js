import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import Thumbnails from "./components/Thumbnails.js";

function App(){

  const [endPoint, setEndpoint] = useState("")

  useEffect(()=>{
    fetchMe()
  }, [endPoint])


  const fetchMe = () =>{
  const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '3cc025931bmsh52e704d3872aad7p1301cejsna5601d2337ab',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};


fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=+${endPoint}', options)
.then(response => {
  return response.json()
  })
.then(data => console.log(data))
}

  const valueSetter = (event) =>{
    setEndpoint(event.target.value)
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Header  />

        <div className="Body">
          <div className="Form">
            <input type="text"  onChange={valueSetter} placeholder="🔍︎ Search your favorite anime..."/>
            <button>Search</button>
          </div>
          <h1>Welcome to my {endPoint}</h1>
        </div>

        <div className="container">
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
