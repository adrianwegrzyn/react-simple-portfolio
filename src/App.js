import React, { Component } from 'react';
import './App.css';
// import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import About from "./components/About";
import Navbar from "./components/Navbar/Navbar";
import ProjectsList from "./components/Projects";
import Contact from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-12">
                  <Header/>
                  <About/>
                  <ProjectsList/>
                  <Contact/>
                  <Navbar/>
              </div>

          </div>

      </div>
    );
  }
}

export default App;
