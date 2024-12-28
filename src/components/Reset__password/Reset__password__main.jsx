// import { images } from "../../constants"

const Reset__password__main = () =>(
    <div className='main__form' id="arrowPoint">
    <h2>RESET PASSWORD</h2>
   <form action="includes/resetPassword.inc.php" method="post"  autocomplete="off">

    <input type="password" name="password" placeholder=" New Password" required/>
    <input type="password" name="coPassword" placeholder="Confirm New Password" required/>
    <input type="submit" name="submit" value="RESET"/>
    <p class="error"></p>
    </form>
   </div>
)

export default Reset__password__main