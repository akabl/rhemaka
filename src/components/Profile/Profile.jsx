import { images } from "../../constants"
import "../Sub__body/Sub__body.css"
const Profile = () =>{

    return(
        <>
            <div className='users__profile__showCase'>
                <img src={images.profile1} alt="" className="Profile-cover-pic"/>
                <div>
                    <img src={images.profile4} alt="" className="Profile-pic"/>
                    <div>
                        <h3>Jr Paul Okorie <span> ~ @A98D0976GG1</span></h3>
                        <p>
                        Followers 
                        <span> 15k </span>
                        Following 
                        <span> 0.0k </span>
                    </p>
                        <p><span>bio:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo tempora non voluptate commodi.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile