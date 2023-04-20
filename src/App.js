import React from "react";
import { ReactDOM } from "react";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import UserData from "./UserData.js";

function App(){

  const users = UserData.map((user)=>{

    return <Contact name={user.name} email={user.email}/>



  })


  return (
    <div className="App">
      <header className="App-header">
        <Header  />
        <Content />
        <Footer />
      </header>
    </div>
  );
}

export default App;
