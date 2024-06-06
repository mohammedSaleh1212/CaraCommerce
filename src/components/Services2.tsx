import image1 from '../assets/images/services-df7b234b_2.png'
import image2 from '../assets/images/services2-c961d534.png'
import image3 from '../assets/images/services3-e5fa03fa.png'
import '../styles/services2.css'

const Services2 = () => {
  return (
    <div className="container-md services-container section-padding">
    <h2>Services to help you shop</h2>
    <div className="row mt-5 flex-wrap flex-md-nowrap flex-lg-nowrap gap-3 justify-content-center">
        <div className="service col-12 col-md-4 ">
            <div className="image-container">

                <img className='w-100 service-image' src={image1} alt="" />
            </div>


            <div className="  text-content  ">
                <h5>Frequently Asked Questions</h5>
                <p>Updates On Safe Shopping In our Store</p>

            </div>
        </div>
        <div className="service col-md-4 col-12">
            <div className="image-container">

                <img className='w-100 service-image' src={image2} alt="" />
            </div>


            <div className="text-content ">
                <h5>Frequently Asked Questions</h5>
                <p>Updates On Safe Shopping In our Store</p>

            </div>
        </div>
        <div className="service col-md-4 col-12">
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

export default Services2