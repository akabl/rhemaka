
import React from 'react';
import {images} from '../../constants';
import './HeaderHero.css';

const HeaderHero = () => (
    <div>
    <img className="hero" src={images.hero} alt="hero"></img>
  </div>
)
export default HeaderHero