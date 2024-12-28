import {images} from '../../constants'

const Verify__email__header = () =>(
    <>
    <div className='greeting'>
    <div className="header-Content">
    <h2>rHEMAKA</h2>
    <p>Welcome to Rhemaka Programming Institute, we have sent an email to you containing the six digit code, input it and get verified. we are almost there.. </p>
   </div>
   <div className="arrow-case">
    <div className="arrow">
      <img src={images.arrow} alt="arrow-up-light" class="pointer"/>
      <a href="#arrowPoint"></a>
     </div>
   <p>verify account</p>
  </div>
   </div>
    </>

)

export default Verify__email__header