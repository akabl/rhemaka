import Contact__form from '../../components/Contact__form/Contact__form'
import Contact__us from '../../components/Contact__us/Contact__us'
import './ContactSupport.css'
import { images } from '../../constants'
import '../../components/Contact__form/Contact__form.css'

const ContactSupport = () =>(
    <>
    
        <div className='ContactSupport'>
            <div>
                <Contact__form/>
                <Contact__us/>
            </div>
        </div> 
        <div className='contact-suport-notification'>
            <div className='notification-signal'><p>5+</p></div>
            <img src={images.notificationBell} alt="" />
        </div>
        <footer className='contact-suport-footer'>
            <p> copyright 2021 all right reserved rhemaka itech Institute </p>
        </footer>
    </>
    
)
export default ContactSupport