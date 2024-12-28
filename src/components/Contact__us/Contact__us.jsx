import {images} from '../../constants'
import './Contact__us.css'

const Contact__us = () =>(
    <div>
    <h2>Contact us</h2>
    <div>
        <img src={images.hero} alt="address" />
        <p><span>Address:</span> 198 Goldie street, suite 721 New York NY 10016</p>
    </div>
    <div>
        <img src={images.hero} alt="phone" />
        <p><span> Phone: </span> +2349160852464</p>
    </div>
    <div>
        <img src={images.hero} alt="email" />
        <p><span> Email: </span>info@rhemaka.com</p>
    </div>
</div>
)
export default Contact__us