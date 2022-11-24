import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import TopLogo from '../TopLogo/TopLogo'

const TopNav = () => {
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
                <Link className="nav-link active" aria-current="page" to="./">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="./allproducts">ALL BACKPACK'S</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="./" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ACCESSORIES
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="./patches">PATCHES</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="./gym-accessories">GYM ACCESSORIES</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="./wishlist">WISHLIST</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="./checkout">CHECKOUT</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">SEARCH</button>
            </form>
          </div>

        </div>
      </nav>
    </>
  )
}

export default memo(TopNav)