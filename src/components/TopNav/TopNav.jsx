import React, { memo } from 'react'
/* import { useContext } from 'react' */
import { Link/* , useNavigate */ } from 'react-router-dom'
/* import Login from '../../pages/Login/LoginPage' */
/* import { AuthContext } from '../../auth/context/AuthContext' */
import TopLogo from '../TopLogo/TopLogo'

const TopNav = () => {

  /* const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();

    navigate('/login', {
      replace: true,
    });
  }; */

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <TopLogo />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/allproducts">ALL BACKPACK'S</Link>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" aria-expanded="false">
                  ACCESSORIES
                </div>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/patches">PATCHES</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/gym-accessories">GYM ACCESSORIES</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/wishlist">WISHLIST</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/checkout">CHECKOUT</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">SEARCH</button>
            </form>
            {/* <Login /> */}
          </div>

        </div>
        {/* <span className="nav-item nav-link text-primary">
          {user ? `Welcome back, ${user.name}` : null}
        </span>
        <button className="nav-item nav-link btn" onClick={onLogout}>
          Logout
        </button> */}
      </nav>
    </>
  )
}

export default memo(TopNav)