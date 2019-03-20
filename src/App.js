import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RecipesContainer from './components/RecipesContainer'

class App extends Component {
  render() {
    return (

      <div>
      <Navbar/>
        <div className="app-div">
          <RecipesContainer/>
        </div>
        <Footer/>
      </div>

    );
  }
}

export default App;
