
import './About.css'
import {images} from '../../constants'

const About = () =>{
   return(
<>
    <main>
    <div className='main-container'>
        <section className='about-us'>
            <h3>About rhemaka Itech Institute</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, reiciendis dolorum eveniet excepturi dicta, in laudantium ratione veritatis molestiae placeat neque, quasi non fugit possimus commodi tempore voluptas! Error sit eveniet eligendi est quam nobis accusamus. Quis, cum. Aperiam, numquam rem?</p>
        </section>
        <section className='our-values'>
            <h3>Our values</h3>
            <div>

            <div>
                <img src={images.hero} alt="" />
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum illo odio aliquid. Delectus, eaque quasi.</p>
            </div>

            <div>
                <img src={images.hero} alt="" />
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum illo odio aliquid. Delectus, eaque quasi.</p>
            </div>
            <div>
                <img src={images.hero} alt="" />
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum illo odio aliquid. Delectus, eaque quasi.</p>
            </div>
            <div>
                <img src={images.hero} alt="" />
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum illo odio aliquid. Delectus, eaque quasi.</p>
            </div>
            <div>
                <img src={images.hero} alt="" />
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum illo odio aliquid. Delectus, eaque quasi.</p>
            </div>
            <div>
                <img src={images.hero} alt="" />
                <h5>Lorem, ipsum dolor.</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum illo odio aliquid. Delectus, eaque quasi.</p>
            </div>
            </div>
        </section>
        <section className='our-mission'>
            <h3>
                Why rhemaka?
            </h3>
            <div>
                <img src={images.profile} alt="" />
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dignissimos, illum laudantium voluptatum, in impedit neque fugit, non facilis</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta quae eligendi! Cupiditate blanditiis dolores, mollitia, fugit corporis est odit molestias dolorem animi eum, magni error commodi earum natus inventore.</p>
                    <div>
                        <img src={images.hero} alt="" />
                        <div>
                            <h5>Lorem, ipsum.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, sit.</p>
                        </div>
                    </div>
                    <div>
                    <img src={images.hero} alt="" />
                        <div>
                            <h5>Lorem, ipsum.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, sit.</p>
                        </div>
                    </div>
                    <div>
                    <img src={images.hero} alt="" />
                        <div>
                            <h5>Lorem, ipsum.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='our-team'>
            
                <h3>Our team</h3>
            <div>
                <div>
                    <img src={images.profile} alt="" />
                    <h5>nameof official</h5>
                    <p>oficial title</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sed.</p>
                </div>
                <div>
                    <img src={images.profile} alt="" />
                    <h5>nameof official</h5>
                    <p>oficial title</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sed.</p>
                </div>

                <div>
                    <img src={images.profile} alt="" />
                    <h5>nameof official</h5>
                    <p>oficial title</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sed.</p>
                </div>
                <div>
                    <img src={images.profile} alt="" />
                    <h5>nameof official</h5>
                    <p>oficial title</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, sed.</p>
                </div>
            </div>
        </section>
        <footer>
            <ul>
                <li><a href="about-us">About us</a></li>
                <li><a href="our-mission">Our mission</a></li>
                <li> <a href="our-values">Our values</a></li>
                <li><a href="our-team">Our team</a></li>
            </ul>
            <p>© copyright 2024 All right reserve rhemaka Tech Institute</p>
        </footer>
    </div>
    </main>
    </>
   ) 
}
export default About