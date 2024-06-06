import logo from '../assets/logo.png'
import '../styles/footer.css'

const Footer = () => {
  return (
<div className="footer-container  section-padding px-2 px-md-5">
    <div className="row w-100" data-aos="fade-up">
        <div className="col-6 col-md-8 col-lg-4  ">
            <div className="image-container ">
                <img src={logo} alt="" width={'140px'} height={'40px'}/>
            </div>
            <p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magni excepturi ipsam rem culpa odio in deleniti sequi consequuntur quia?</p>
            <h5 className='mt-4'>Accepted Payments</h5>
            <div className="icons"></div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
            <h5>Make Money</h5>
            <ul>
                <li>Sell On Cara</li>
                <li>Sell Your Services On Cara</li>
                <li>Sell Your Apps On Cara</li>
                <li>Become An Affiate</li>
                <li>Advertise Your Products</li>
                <li>Sell With Us</li>
                <li>Sell With Us</li>
                <li>Sell With Us</li>
            </ul>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
            <h5>Products</h5>
            <ul>
                <li>Apple</li>
                <li>Dresses</li>
                <li>Jewelry</li>
                <li>Mobile</li>
                <li>Food</li>
                <li>Mobiles</li>
                <li>Laptops</li>
            </ul>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
            <h5>Let Us Help You</h5>
            <ul>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping</li>
                <li>Refund And Return Policy</li>
                <li>Refund And Return Policy</li>
                <li>Refund And Return Policy</li>
                <li>Refund And Return Policy</li>
           
            </ul>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
            <h5>Know Us</h5>
            <ul>
            <li>Careers</li>
            <li>About Cara</li>
            <li>Privacy And Policy</li>
            <li>Contact Us</li>
            <li>Contact Us</li>

            </ul>
        </div>
    </div>
</div>

)
}

export default Footer