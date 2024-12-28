import { images } from "../../constants"

const Signup__footer = () =>(

<div className="left-bar">
  <p> I agree to the terms and conditions and the privacy policy by signing up. </p>
  <a href="#">Already Have an Account? Signin.</a>
  <a href="#"> Privacy, </a><a href="#"> Terms & Conditions, </a><a href="#"> Help</a> 
  <div className="sign-with">
  <div>
    <div><img src={images.twitter} alt="twitter"/></div>
    <div><img src={images.google} alt="google"/></div>
    <div><img src={images.facebook} alt="facebook"/></div>
  </div>
  </div>
 </div>

)

export default Signup__footer