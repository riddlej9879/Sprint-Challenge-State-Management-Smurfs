import React, { Component } from "react";
import { SmurfsProvider } from "./SmurfsContext";
// import AddSmurf from './AddSmurf'

import "./App.css";
import { Smurfs } from "./Smurfs";
import PostForm from "./PostForm";

import Background from "../images/smurf-village.jpg";

class App extends Component {
  render() {
    return (
      <SmurfsProvider>
        <img className="background-image" src={Background} />
        <div className="App">
          <h1 className="header">SMURFS! 2.0 W/ Context API</h1>
          <PostForm />
          <Smurfs />
        </div>
      </SmurfsProvider>
    );
  }
}

export default App;
