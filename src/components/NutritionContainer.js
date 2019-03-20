import React, { Component } from 'react';
import DefaultNutrition from './DefaultNutrition'

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
    
  }

  render() {
    return (
      <>
      <h1 className="font-3-5 center-text bold-text">Find Nutrition Info For Your Ingredient</h1>
      <div className="row">
        <form onSubmit={(e)=>this.handleSubmit(e,this.state.ingredient)}>
          <label htmlFor="ingredients" className="font-2 bold-text">Enter Ingredient:</label>
          <input type='text' name="ingredients" className="font-2" placeholder="cheese, egg, chicken etc..." onChange={this.handleChange} value={this.state.ingredient}/>
          <input type="submit" className="btn btn-blue btn-small"/>
        </form>
        <hr className="form-hr"/>
      </div>
      <DefaultNutrition/>
      </>
    );
  }

}

export default NutritionContainer;
