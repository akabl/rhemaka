
import { useState } from "react"
import "../../components/Sub__header/Sub__header.css"
import { images } from "../../constants"

const   Notification__drpdwn = ({onClose}) =>{

    const handleCloseNotification = () =>{
        onClose()
    }
    

    return(
       <div className='notification_body'>
        <div className="notification_drpdwn_header">
            <h4>Notifications</h4>
            <img src={images.closeBtn} alt="close button" onClick={ handleCloseNotification}/>
        </div>
        <div className="notification_body_container">
            <div className="notification__drpdwn_body">
                <img src={images.profile4} className="user-image-notification" alt="" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione und odio maiores?</p>
                    <p>15 hours ago</p>
                </div>
            </div>
            <div className="notification__drpdwn_body">
                <img src={images.profile4} className="user-image-notification" alt="" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione und odio maiores?</p>
                    <p>15 hours ago</p>
                </div>
            </div>
            <div className="notification__drpdwn_body">
                <img src={images.profile4} className="user-image-notification" alt="" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione und odio maiores?</p>
                    <p>15 hours ago</p>
                </div>
            </div>
            <div className="notification__drpdwn_body">
                <img src={images.profile4} className="user-image-notification" alt="" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione und odio maiores?</p>
                    <p>15 hours ago</p>
                </div>
            </div>

            <div className="notification__drpdwn_body">
                <img src={images.profile4} className="user-image-notification" alt="" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione und odio maiores?</p>
                    <p>15 hours ago</p>
                </div>
            </div>
        </div>
       </div>
    )
}
export default Notification__drpdwn