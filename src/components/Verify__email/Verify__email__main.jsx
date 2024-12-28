// import { images } from "../../constants"

const Verify__email__main = () =>(
    <div className='main__form' id="arrowPoint">
    <h2>VERIFY ACCOUNT</h2>
    <form action="includes/verifyEmail.inc.php" method="post"  autocomplete="off">

    <input type="email" name="email" placeholder="Enter six digit code" required/> 
    <div className='Resend_mail'>
    <a href="#">Resend OTP</a>
    <p>60s</p>
    </div>
    <input type="submit" name="submit" value="VERIFY"/>
    <p className="error"></p>
    </form>
   </div>
)

export default Verify__email__main