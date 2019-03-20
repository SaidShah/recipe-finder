import React from 'react';
import imgOne from '../images/imgOne.png'
import imgTwo from '../images/imgTwo.png'

const Default = () => (
  <div className="default-images">
    <img src={imgOne} alt="ingredients" className='img'/>
    <img src={imgTwo} alt="ingredient" className='img'/>
  </div>
);

export default Default;
