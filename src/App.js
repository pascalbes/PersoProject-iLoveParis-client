/// BASIC
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

/// PAGES
import Header from "./views/Header";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact.jsx";
import GameSelection from "./views/GameSelection.jsx";
import Game from "./views/Game.jsx";
// import api from "./api/APIHandler"

/// STYLES
import "./styles/App.css"

function App() {
  return (
    <div id="App">
      <Header />
      <main id="content-main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> 
          <Route path="/gameselection" component={GameSelection} /> 
          <Route path="/game" component={Game} /> 
          {/* <Route path="/topscores" component={TopScores} /> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
