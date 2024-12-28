import {images} from '../../constants'

const Signup__header = () =>(
    <>
    <div className='greeting'>
        <div className="header-Content">
            <h2>rHEMAKA</h2>
            <p>Welcome to Rhemaka Programming Institute, a leading programming institute in Africa founded in 2021.</p>
        </div>
        <div className="arrow-case">
            <div className="arrow">
                <img src={images.arrow} alt="arrow-up-light" className="pointer"/>
                <a href="#arrowPoint"></a>
            </div>
        <p>sign up</p>
        </div>
   </div>
    </>

)

export default Signup__header