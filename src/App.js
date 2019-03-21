import React, { Component } from 'react';
import {Switch, withRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RecipesContainer from './components/RecipesContainer'
import NutritionContainer from './components/NutritionContainer'
import Default from './components/Default'

class App extends Component {

  state={
    allFoods: [],
    nutrition: '',
    name: ''
  }

  getFoods=(givenArr)=>{
    let words = givenArr.join(",")
    fetch(`https://api.edamam.com/search?q=${words}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}`)
    .then(res => res.json())
    .then(response => this.setState({allFoods: response}))
  }

  getNutrition=(givenIng)=>{
    fetch(`https://api.edamam.com/api/nutrition-data?app_id=${process.env.REACT_APP_EDAMAM_NUTRITION_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_NUTRITION_API_KEY}&ingr=${givenIng.replace(" ", "%20")}`)
    .then(res => res.json())
    .then(response => this.setState({nutrition: response, name: givenIng}))
  }

  render() {
    return (

      <div>
      <Navbar/>
        <div className="app-div">

      <Switch>
        <Route path="/recipes" render={()=><RecipesContainer getFoods={this.getFoods} foods={this.state.allFoods}/>}/>
        <Route path="/nutrition" render={()=><NutritionContainer getNutrition={this.getNutrition} nutritionInfo={this.state.nutrition} name={this.state.name}/>}/>
        <Route path="/" render={()=><Default/>}/>
      </Switch>

      </div>
        <Footer/>
      </div>


    );

  }
}

export default withRouter(App);
