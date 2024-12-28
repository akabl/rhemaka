import {images} from '../../constants'

const Reset__password__header = () =>(
    <>
    <div className='greeting'>
    <div class="header-Content">
    <h2>rHEMAKA</h2>
    <p>Welcome to Rhemaka Programming Institute, enjoying the process? here we go! complete the fills with a new password and join the moving train</p>
   </div>
   <div class="arrow-case">
    <div class="arrow">
      <img src={images.arrow} alt="arrow-up-light" class="pointer"/>
      <a href="#arrowPoint"></a>
     </div>
   <p>resset password</p>
  </div>
   </div>
    </>

)

export default Reset__password__header