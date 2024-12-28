
import HeaderCon from './containers/HeaderCon/HeaderCon';
import ContactSupport from './containers/ContactSupport/ContactSupport';
import CommunityForums from './containers/Body/Body';
import Sign__form from './containers/Sign__form/Sign__form';
import './App.css';
import { useState } from 'react';
import Body from './containers/Body/Body';
import About from './containers/About/About';
import Blog__news from './containers/Blog__news/Blog__news';


const App = () => {
  const [currentPage, setCurrentPage] = useState('Community/Forums')
  const [showSignForm, setShowSignForm] = useState(false);

  const handelPageChange = (page) => {
    setCurrentPage(page)
    setShowSignForm(false);
}

  const handleSignButtonClick = () => {
    setShowSignForm(true);
};

   const renderPage = () =>{
      
    switch(currentPage){
         case 'Community/Forums':
           return(
            showSignForm ? <Sign__form/>: (<Body onSignButtonClick={handleSignButtonClick}/>)
           )
          
         case 'Contact/Support':
           return <ContactSupport/>
         case 'Blog/News':
           return <Blog__news/>
         case 'About':
           return <About/>
         default: 
           return null
       }

   }
return(
  <>
    <HeaderCon onPageChange={handelPageChange} presentPage={currentPage}/>
   {
   renderPage() 
 }
  </>

)
};

export default App;