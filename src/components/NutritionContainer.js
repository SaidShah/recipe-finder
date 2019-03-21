import React, { Component } from 'react';
import DefaultNutrition from './DefaultNutrition'
import NutritionCard from './NutritionCard'

class NutritionContainer extends Component {

  state={
    ingredient:''
  }

  handleChange=(e)=>{
    this.setState({
      ingredient:e.target.value
    })
  }

  handleSubmit=(e, ingredient)=>{
    e.preventDefault()
    if(ingredient){
      this.props.getNutrition(ingredient)
    }
    this.setState({ingredient: ''})
  }

  showNutrition=()=>{
    if(this.props.nutritionInfo.calories > 0){
      return <NutritionCard info={this.props.nutritionInfo} name={this.props.name}/>
    }else{
      return <DefaultNutrition/>
    }
  }

  render() {
    return (
      <>
      <h1 className="font-3-5 center-text bold-text">Find Nutrition Info For Your Ingredients</h1>
      <div className="row">
        <form onSubmit={(e)=>this.handleSubmit(e,this.state.ingredient)}>
          <label htmlFor="ingredients" className="font-2 bold-text">Enter Quantity & Ingredient:</label>
          <input type='text' name="ingredients" className="font-2" placeholder="2 apples, 1 slice cheese, 2 eggs etc..." onChange={this.handleChange} value={this.state.ingredient}/>
          <input type="submit" className="btn btn-blue btn-small"/>
        </form>
        <hr className="form-hr"/>
      </div>

      {this.showNutrition()}
      </>
    );
  }

}

export default NutritionContainer;
