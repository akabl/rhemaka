import React from 'react';
import './HeaderNav.css';


const HeaderNav = ({presentPage, onPageChange}) => (
  
  <nav>
   <div className="lower-nav">

   <div className={presentPage == 'Institution' ? 'active': ''} onClick={()=>{onPageChange('Institution')}}>
      <p>Institution</p>
    </div>
    
    <div className={presentPage == 'Community/Forums' ? 'active': ''} onClick={()=>{onPageChange('Community/Forums')}}>
      <p>Community/Forums</p>
    </div>
    
    <div className={presentPage == 'Contact/Support' ? 'active': ''} onClick={()=>{onPageChange('Contact/Support')}}>
      <p>Contact/Support</p>
    </div>
    
    <div className={presentPage == 'Blog/News' ? 'active': ''} onClick={()=>{onPageChange('Blog/News')}}>
      <p>Blog/News</p>
    </div>
    
    <div className={presentPage == 'About' ? 'active': ''} onClick={()=>{onPageChange('About')}}>
      <p>About</p>
    </div>

   </div>
  </nav>
  
);

export default HeaderNav;
