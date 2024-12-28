import {images} from '../../constants'

const Forgotten__password__header = () =>(
    <div className='greeting'>
        <div className="header-Content">
            <h2>rHEMAKA</h2>
            <p>Welcome to Rhemaka Programming Institute, keep following every single step we will help you retrieve your account. Just trust the
     process..</p>
        </div>
        <div className="arrow-case">
            <div className="arrow">
                <img src={images.arrow} alt="arrow-up-light" className="pointer"/>
                <a href="#arrowPoint"></a>
            </div>
        <p>find account</p>
        </div>
   </div>
)

export default Forgotten__password__header