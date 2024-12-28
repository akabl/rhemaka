import { images } from "../../constants"

const Forgotten__password__main = () =>(
    <div className='main__form' id="arrowPoint">
   <h2>FIND MY ACCOUNT</h2>
   <form action="" method="post"  autocomplete="off">
    <input type="email" name="email" placeholder="Enter account email" required/> 
    <input type="submit" name="submit" value="Search"/>
    <p className="error"></p>
    </form>
   </div>
)

export default Forgotten__password__main