import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (

      <div>
      <Navbar/>
        <div className="content">

        </div>
        <div id="edamam-badge" data-color="white"></div>
      </div>

    );
  }
}

export default App;
