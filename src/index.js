import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home.js";
import About from "./about.js";
import Forum from "./forum.js";
import Navbar from "./navbar.js";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="nav-wrapper">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/forum" component={Forum} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
