import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import Thumbnails from "./components/Thumbnails.js";

function App(){

  const [endPoint, setEndpoint] = useState("")
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetchMe()
  }, [endPoint])


  const fetchMe = () =>{
  const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'e6adebb610mshdbd19c87228bf56p18fef2jsn7452b0a7b163',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};


fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${endPoint}`, options)
.then(response => {
  return response.json()
  })
.then(data => setItems(data.data))
}

  const valueSetter = (event) =>{
    setEndpoint(event.target.value)
  }
  
  const animeList = items.map((result)=>{
    return <Thumbnails title={result.title} picture={result.image} status={result.status} type={result.type} link={result.link}/>
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <Header  />

        <div className="Body">
          <div className="Form">
            <input type="text"  onChange={valueSetter} placeholder="🔍︎ Search your favorite anime..."/>
            <button>Search</button>
          </div>
          <h3>Welcome to the place where you can find complete list of all animes</h3>
        </div>

        <div className="container">
          {animeList}
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
