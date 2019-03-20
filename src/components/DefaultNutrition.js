import React from 'react';
import imgThree from '../images/imgThree.png'
import imgFour from '../images/imgFour.png'
import imgFive from '../images/imgFive.png'

const DefaultNutrition = () => (
  <div className="default-images">
    <img src={imgThree} alt="three"  className='img'/>
    <img src={imgFour} alt="four"  className='img'/>
    <img src={imgFive} alt="five"  className='img'/>
  </div>
);

export default DefaultNutrition;
