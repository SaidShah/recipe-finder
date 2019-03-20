import React, { Component } from 'react';
import Default from './Default'
import Foodcard from './Foodcard'

class RecipesContainer extends Component {

  state={
    ingredients:'',
    foods:[]
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  showFoods=()=>{
    if(this.props.foods.hits){
        let allFoods = this.props.foods.hits.map(eachItem=>{
          return <Foodcard meal={eachItem} key={eachItem.recipe.image}/>
        })
        return allFoods
    }else{
      return <Default/>
    }
  }

  handleSubmit=(e,ings)=>{
    e.preventDefault();
    if(ings){
    let ingArr = ings.split(",").map(eachWord=>{return eachWord.trim()})
    this.setState({ingredients: ''}, ()=>this.props.getFoods(ingArr))
   }
  }

  render() {

    return (
      <>
      <h1 className="font-3-5 center-text bold-text">Find Recipes For Your Ingredients</h1>
      <div className="row">
        <form onSubmit={(e)=>this.handleSubmit(e,this.state.ingredients)}>
          <label htmlFor="ingredients" className="font-2 bold-text">Enter Ingredients:</label>
          <input type='text' name="ingredients" className="font-2" placeholder="cheese, eggs, chicken etc..." onChange={this.handleChange} value={this.state.ingredients}/>
          <input type="submit" className="btn btn-blue btn-small"/>
        </form>
        <hr className="form-hr"/>
      </div>
      <div className="row">
      {this.showFoods()}
      </div>
      </>
    );
  }

}

export default RecipesContainer;
