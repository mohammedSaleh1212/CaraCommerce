import '../styles/services.css'
import image1 from '../assets/images/services-df7b234b_2.png'
import image2 from '../assets/images/services2-c961d534.png'
import image3 from '../assets/images/services3-e5fa03fa.png'

const Services = () => {
    return (
        <div className="container services-container section-padding">
            <h2>Services to help you shop</h2>
            <div className="cards-container  mt-5">
                <div className="service " data-aos="zoom-in">
                    <div className="image-container">

                        <img className='w-100 service-image' src={image1} alt="" />
                    </div>


                    <div className="  text-content  ">
                        <h5>Frequently Asked Questions</h5>
                        <p>Updates On Safe Shopping In our Store</p>

                    </div>
                </div>
                <div className="service " data-aos="zoom-in">
                    <div className="image-container">

                        <img className='w-100 service-image' src={image2} alt="" />
                    </div>


                    <div className="text-content ">
                        <h5>Frequently Asked Questions</h5>
                        <p>Updates On Safe Shopping In our Store</p>

                    </div>
                </div>
                <div className="service" data-aos="zoom-in">
                    <div className="image-container">

                        <img className='w-100 service-image' src={image3} alt="" />
                    </div>


                    <div className="text-content ">
                        <h5>Frequently Asked Questions</h5>
                        <p>Updates On Safe Shopping In our Store</p>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Services