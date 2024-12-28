// import { images } from "../../constants"

const Signin__main = () =>(
    <div className='main__form' id="arrowPoint">
 <h2> SIGN IN</h2>
   <form action="includes/login.inc.php" method="post"  autocomplete="off">

    <input type="email" name="email" placeholder="Email" required/> 
    <input type="password" name="password" placeholder="Password" required/>
    <input type="submit" name="submit" value="SIGN IN"/>

    <p className="error"></p>

    </form>
   </div>
)

export default Signin__main