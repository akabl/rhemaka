import { images } from "../../constants"

const Signin__footer = () =>(

<div className="left-bar">
  <a href="findAccount.html">forgotten password?</a>
  <a href="signUp.html">create an Account? Sign up.</a>
  <a href="#"> Privacy, </a>
  <a href="#"> Terms & Conditions, </a>
  <a href="#"> Help</a>
  <div className="sign-with">
  <div>
    <div><img src={images.twitter} alt="twitter"/></div>
    <div><img src={images.google} alt="google"/></div>
    <div><img src={images.facebook} alt="facebook"/></div>
  </div>
  </div>
 </div>

)

export default Signin__footer