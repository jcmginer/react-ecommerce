import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from '../components/Context/CartContext'
import Home from '../components/Home/Home'
import Checkout from '../components/Checkout/Checkout'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/checkout' element={ <Checkout /> } />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default Router