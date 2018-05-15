import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <span id="slogan">Koop's Bloc Jams: Tunes to code by</span>
        </header>
        <span id="subheader">
          <span id="nav">
            <Link to="/" alt="Home">
              {"Home "}
            </Link>
            <Link to="/library" alt="Records you can play">
              {" Albums "}
            </Link>
            <Link to="/about" alt="About this project">
              {"  About "}
            </Link>
            <a
              href="https://github.com/koopdev/bloc-jams-react"
              alt="Link to Source Code"
              target="_blank"
              rel="noopener noreferrer">
              {" Source Code "}
            </a>
          </span>
        </span>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/about" component={About} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
