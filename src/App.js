import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import logo from "./img/musicspheresfibon.jpg";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
					<img className="logo" src={logo} alt="Logo" />
					<h1>Bloc Jams</h1>
					<section className="slogan">TUNES TO C0DE BY</section>
				</header>
        <div className="sidebar">
            <Link to="/" className="ion-ios-home" alt="Home"></Link><p></p>
            <Link to="/library" className="ion-ios-recording" alt="Records you can play"></Link><p></p>
						<Link to ="/about" className="ion-information-circled" alt="About this project"></Link><p></p>
						<a href="https://github.com/koopdev/bloc-jams-react" alt="Link to Source Code" className="ion-code-working" target="_blank" rel="noopener noreferrer"> </a>
				</div>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
					<Route path="/about" component={About} />
					<Route path="/album/:slug" component={Album} />
        </main>
				<footer>
					<p>Koop Codes ©2018 </p>
					<div className="ion-social-github"></div>
					<div className="ion-social-twitter"></div>
					<div className="ion-social-facebook"></div>
					<div className="ion-social-linkedin"></div>
				</footer>
      </div>
    );
  }
}

export default App;
