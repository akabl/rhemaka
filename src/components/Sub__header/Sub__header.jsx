import "./Sub__header.css"
import {images} from '../../constants';
// import Logedin__user__header from "./Logedin__user__header";
import Sign__buttons from "../../components/Sub__header/Sign__buttons"
import { useState } from "react";
import Logedin__user__header from './Logedin__user__header'



const Sub__header = ({currentPage, onPageChange, onSignButtonClick, setShowModalButtonClick}) =>{

   return (
  
      <div className='container body__main__header'>
          <div className='body__main__header__left'>
            <ul>
              <li className={currentPage == 'forum' ? 'active' : ''} onClick={()=>{onPageChange('forum')}}><p>Forum</p></li>
              
              <li className={currentPage == 'faq' ? 'active' : ''} onClick={()=>{onPageChange('faq')}} ><p>FAQ</p></li>

              <li className={currentPage == 'community' ? 'active' : ''} onClick={()=>{onPageChange('community')} }><p>Community</p></li>
            </ul>
          </div>
          <div className='body__main__header__right'>
            <div>
              <input type="text" placeholder='Search'/>
              <img src={images.searchIcon} alt="searchIcon" />
            </div>

            {/* <Sign__buttons onSignButtonClick={onSignButtonClick}/> */}
            <Logedin__user__header 
            setShowModalButtonClick={setShowModalButtonClick} 
            onPageChange={onPageChange}
            currentPage={currentPage} 
            />
          </div>
      </div>
      
    )
    }
export default Sub__header