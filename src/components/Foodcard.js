import React from 'react';

function getIngredients(givenArr){
  let ings = givenArr.map((eachIng, index)=>{
     return <li className="food-li" key={index}>{eachIng.text}</li>
  })
  return ings
}

const Foodcard = (props) => (

  <div className="column foodcard-border ">
      <h2 className="bold-text">{props.meal.recipe.label}</h2>
      <img src={props.meal.recipe.image} className="food-img" alt="recipes"/>
      <ul className="food-ul bold-text">
        {getIngredients(props.meal.recipe.ingredients)}
      </ul>
      <h4 className="bold-text">Allergens: {props.meal.recipe.healthLabels.join(" | ")}</h4>
  </div>
);

export default Foodcard
