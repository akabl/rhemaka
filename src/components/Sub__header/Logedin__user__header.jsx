import './Sub__header.css'
import images from '../../constants/images'
import Notification__drpdwn from '../../components/Drop__Downs/Notification__drpdwn'
import { useState } from 'react'

const Logedin__user__header = ({setShowModalButtonClick, onPageChange, currentPage}) => {

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const handleOpenNotification = () => {
      setIsNotificationOpen(true);
    };
  
    const handleCloseNotification = () => {
      setIsNotificationOpen(false);
    };

    return (
        <>
         <button onClick={() => setShowModalButtonClick()}><img src={images.addPost}/></button>
         <div className="notification-icon-holder">
                <img src={images.notificationBell} 
                     alt="notification icon" 
                     className='notification' 
                     onClick={ handleOpenNotification}/>
                {isNotificationOpen && <Notification__drpdwn 
                onClose={handleCloseNotification}/>}
         </div>
         
            <img src={images.profile1} alt="user icon" className={currentPage == 'profile' ? 'active-profile' : ''} onClick={()=>{onPageChange('profile')}} />

            <img src={images.menu} alt="menu icon" />
         
        </>
    )
}
export default Logedin__user__header