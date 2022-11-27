import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from '../components/Cart/Context/CartContext'
import Home from '../pages/Home/Home'
import GymAccessories from '../pages/GymAccessories/GymAccessories'
import WishlistProvider from '../pages/Wishlist/WishlistProvider'
import AllProducts from '../pages/AllProducts/AllProducts'
import Checkout from '../pages/Checkout/Checkout'
import Wishlist from '../pages/Wishlist/Wishlist'
/* import { LoginPage } from '../auth/pages/LoginPage' */

/* import InfoProducts from '../components/InfoProducts/InfoProducts' */

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <WishlistProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/allproducts' element={<AllProducts />} />
              <Route path='/gym-accessories' element={<GymAccessories />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/checkout' element={<Checkout />} />
              {/* <Route path="/*" element={<LoginPage />} /> */}
              {/* <Route path={`/product/${product.id}`} element={<InfoProducts />} /> */}
            </Routes>
          </WishlistProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default Router