import '../styles/navbar.css'
import useNav from "../hooks/useNav";
import logo from "../assets/logo.png";
import SearchBox from './SearchBox';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useProductQueryStore from '../store';
import { useState } from 'react';
import useCartStore from '../stores/CartStore';
const Nav = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const resetQuery = useProductQueryStore(s => s.resetQuery)
  const count = useCartStore(s => s.count)

  const navigate = useNavigate()
  const { showNavbar } = useNav()

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${showNavbar ? 'down' : 'up'}`} >
      <div className="container" data-aos="fade-down">
        <Link className="navbar-brand" to={"/"}><img src={logo} alt="" onClick={(event) => {
          event.preventDefault()
          resetQuery()
          navigate('/CaraCommerce/')


        }} /></Link>

        <button className="navbar-toggler" type="button" onClick={() => setShowOffcanvas(!showOffcanvas)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" onClick={() => setShowOffcanvas(!showOffcanvas)}></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-start align-items-center flex-grow-1 pe-3">
              <li className="nav-item" >
                <NavLink className="nav-link active" aria-current="page" to={"/"} onClick={(event) => {
                  event.preventDefault()
                  setShowOffcanvas(false)
                  resetQuery()

                  navigate('/CaraCommerce/')

                }}>Home</NavLink>
              </li>
              <li className="nav-item" >
                <NavLink className="nav-link" to={"/"}>Deals</NavLink>
              </li>
              <li className="nav-item" >
                <NavLink className="nav-link" to={"/"}>What's New</NavLink>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to={"/"}>Delivery</Link>
              </li>
              <li className="nav-item dropdown" >
                <Link className="nav-link dropdown-toggle" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </Link>
                <ul className="dropdown-menu " >
                  <li><Link className="dropdown-item" to={"/"}>Cat1</Link></li>
                  <li><Link className="dropdown-item" to={"/"}>Cat1</Link></li>
                  <li>
                  </li>
                  <li><Link className="dropdown-item" to={"/"}>Cat1</Link></li>
                </ul>
              </li>
            </ul>
            <SearchBox />
            <div className="user-wrapper me-2 cursor-pointer" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"  >
              <i className="bi bi-person fs-3 "></i>
            </div>

            <div className="cart-wrapper cursor-pointer" onClick={() => navigate('/CaraCommerce/cart')} >
              <i className='bi bi-cart fs-3 position-relative'>

                <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${!count ? 'd-none' : ''}`}>
                  {count}
                  <span className="visually-hidden">cart elements</span>
                </span>
              </i>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav