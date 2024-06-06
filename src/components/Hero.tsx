import '../styles/hero.css'
import heroImg from '../assets/images/Assets/exclusive_image.png'

const Hero = () => {


  return (
      <div className="hero-container container">

    <div className="full-container row">

        <div className="left-content col-12 col-md-6 pt-5 ps-5" data-aos="fade-right">
            <h1 className='hero-head'>Premium Products Online Shop</h1>
            <p className='hero-paragraph mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum labore cum autem voluptatem quasi placeat! Lorem, ipsum dolor.</p>
            <button className="hero-button btn btn-first mt-3">Shop Now</button>

        </div>

        <div className="right-content col-12 col-md-6 " data-aos="fade-left">
            <div className="image-container text-center" >
                <img src={heroImg} alt="" className='hero-image'/>
            </div>

        </div>

    </div>
</div>

)
}

export default Hero