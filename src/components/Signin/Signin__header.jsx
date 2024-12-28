import {images} from '../../constants'

const Signin__header = () =>(
    <>
    <div className='greeting'>
    <div className="header-Content">
    <h2>rHEMAKA</h2>
    <p>Welcome to Rhemaka Programming Institute, login to enjoy with interesting and interactive team, trust you will always fine the best team!.</p>
   </div>
   <div className="arrow-case">
    <div className="arrow">
      <img src={images.arrow} alt="arrow-up-light" className="pointer"/>
      <a href="#arrowPoint"></a>
     </div>
   <p>Sign in</p>
  </div>
   </div>
    </>

)

export default Signin__header