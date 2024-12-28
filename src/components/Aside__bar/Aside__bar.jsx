
import React from "react";
import "./Aside__bar.css"
import {images} from '../../constants';

const Aside__bar = () => (
  <div className='body__aside-bar'>
    
    <div className='aside__top'>
      <h2>rHEMAKA</h2>
    </div>
    <div className="aside-bar-content">
    <div className='categories'>
      <h4>Categories</h4>
      <ul>
        <li><a href="#">Artificial Intelligence</a></li>
        <li><a href="#">Cybersecurity</a></li>
        <li><a href="#">Software</a></li>
        <li><a href="#">Blockchain</a></li>
        <li><a href="#">Computers</a></li>
        <li><a href="#">Web Design</a></li>
        <li><a href="#">Graphics Design</a></li>
      </ul>
    </div>
        <div className='most__viewed'>
            <h4>Most Viewed</h4>
            <ul>
              <li className='first__most__read'><a href="#">PHP</a></li>
              <li className='second__most__read'><a href="#">Django</a></li>
              <li className='second__most__read'><a href="#">React</a></li>
              <li className='third__most__read'><a href="#">Vue</a></li>
            </ul>
            <footer class='aside-footer'>
              <p>© copyright 2024 rhemaka Tech Institute</p>
            </footer>
          </div>    
    </div>
   
  </div>
)
export default Aside__bar