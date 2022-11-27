import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from './Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductLength] = useState(0);

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price, 0
  );

  return (
    <div className="cartItem">
      <div className="buttonCartContainer">
        <div className="buttonCart" onClick={() => setCartOpen(!cartOpen)}>
          {!cartOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>

          ) : (

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>

          )}

        </div>
        {!cartOpen && <div className="productsNumber">{productsLength}</div>}
      </div>

      {cartItems && cartOpen && (
        <div className='cartTest'>
          <h2 className='titleCart'>Your cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className='dropdown'>
              {cartItems.map((item) => (
                <ItemCart key={item.id} item={item} />
              ))}
            </div>
          )}
          <h2 className='titleCart'>Total: {total}€</h2>
          <button className='btnBuy'> <Link to="/checkout">Buy Now</Link></button>

        </div>
      )
      }
    </div >
  );
};

export default Cart;