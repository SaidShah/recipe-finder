import React, { Component } from 'react';
import {Switch, withRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RecipesContainer from './components/RecipesContainer'
import NutritionContainer from './components/NutritionContainer'

class App extends Component {

  state={
    allFoods: [],
    nutrition: ''
  }

  getFoods=(givenArr)=>{
    let words = givenArr.join(",")
    fetch(`https://api.edamam.com/search?q=${words}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}`)
    .then(res => res.json())
    .then(response => this.setState({allFoods: response}))
  }

  getNutrition=(givenIng)=>{
    console.log(givenIng)
  }

  render() {
    return (

      <div>
      <Navbar/>
        <div className="app-div">

      <Switch>
        <Route path="/recipes" render={()=><RecipesContainer getFoods={this.getFoods} foods={this.state.allFoods}/>}/>
        <Route path="/nutrition" render={()=><NutritionContainer getNutrition={this.getNutrition} nutritionInfo={this.state.nutrition}/>}/>
      </Switch>

      </div>
        <Footer/>
      </div>


    );

  }
}

export default withRouter(App);
