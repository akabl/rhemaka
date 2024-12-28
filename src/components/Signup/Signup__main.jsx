import { images } from "../../constants"

const Signup__main = () =>(
    <div className='main__form' id="arrowPoint">
    <h2> SIGN UP</h2>
   <form action="includes/signup.inc.php" method="post"  autocomplete="off">
    <input type="text" className="name" name="name" placeholder=" Enter full Name"  autocapitalize="word" required/>
    <input type="email" className="email" name="email" placeholder="Email" required/> 
    <input type="password" class="password" id="passwordInput" className="password" placeholder="Password" required/>
    <img className="showPassword" src={images.eyeClosed}/>
    <input type="password" className="cPassword" id="cPasswordInput" name="cPassword" placeholder="Confirm Password" required/>
    <div className="number">
    <img src={images.ngFlag} alt="flag" class="selected-flag"/><p className="country">(+234)</p>
    <input type="text" inputmode="numeric" parttern="[0-9]+" onkeydown="limit(this);" onkeyup="limit(this);" className="phone waNum" id="phone" name="phone" placeholder="Whatsapp Number" required/>
    </div>
    <p className="error"></p>
    <input type="submit" className="submit" name="submit" value="SIGN UP"/>
   </form>
   </div>
)

export default Signup__main