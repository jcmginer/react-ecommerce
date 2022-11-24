import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from '../components/Context/CartContext'
import Home from '../components/Home/Home'
import Checkout from '../components/Checkout/Checkout'
import Wishlist from '../components/Wishlist/Wishlist'
import GymAccessories from '../components/GymAccessories/GymAccessories'
import WishlistProvider from '../components/Wishlist/WishlistProvider'
import AllProducts from '../components/AllProducts/AllProducts'
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
              {/* <Route path={`/product/${product.id}`} element={<InfoProducts />} /> */}
            </Routes>
          </WishlistProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default Router