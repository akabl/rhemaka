import './Community.css'
import {images} from '../../constants'

const Community = () =>(
    <div className='feature__container'>
        <div className='features'>
            <div>
                <img src={images.devTeam} alt="" />
                <h5>Stronger Developer Team</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div>
            <img src={images.collaboration} alt="" />
                <h5>Collaboration</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div>
            <img src={images.focus} alt="" />
                <h5>Continuous</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
        <div className='about__comunity'>
            {/* <div className="about__img"> */}
                <img src={images.profile} alt="" />
            
            <div className='about__text'>
                <h1>About rhemaka Tech Community</h1>
                <p>It's a spectrum that ranges from binge drinking to heavy, compulsive alcohol consumption causing harm...</p>
                <button>Join Community</button>
            </div>
        </div>
        <div className='Executives'>
            <div className='co__founder-one'>
                <p>Lorem, ipsum.</p>
                <h3>Co-founder</h3>
                <img src={images.profile} alt="" />
                <p>comp.scientist U. Emmanuel</p>
                <p>snr back end developer and director at rhemaka instute</p>
                <button>Know More</button>
            </div>

            <div className='co__founder-two'>
                <p>Lorem, ipsum.</p>
                <h3>Co-founder</h3>
                <img src={images.profile1} alt="" />
                <p>Edu. technologiest. O. paul </p>
                <p>snr frount end developer at rhemaka instute</p>
                <button>Know More</button>
            </div>

            <div className='other__executives'>

                <div>
                    <img src={images.profile1} alt="" />
                    <div>
                        <h5>Technical Director</h5>
                        <p>Lorem, ipsum adipisicing elit.</p>
                    </div>
                </div>

                <div>
                    <img src={images.profile} alt="" />
                    <div>
                        <h5>Mannageing Director</h5>
                        <p>Lorem, ipsum doloradipisicing elit.</p>
                    </div>
                </div>

                <div>
                    <img src={images.profile1} alt="" />
                    <div>
                        <h5>General Sectary</h5>
                        <p>Dolor sit consectetur adipisicing elit.</p>
                    </div>
                </div>

            </div>
        </div>
        </div>
);
export default Community;