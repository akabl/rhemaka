import { images } from "../../constants"
import './success.css'

const Success = () =>(
    <>
  <div class="sucContainer">

    <div>
    <img src={images.unlike} alt="success"/>
    </div>

    <div>
     <p> Success <span>User name</span>! you have signed up for rhemaka click on the Login below to get started</p>
     <a href="signIn.html" class="submit">Login</a>
    </div>

  </div>
    </>
)

export default Success