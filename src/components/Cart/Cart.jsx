import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import styles from './cart.css'

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
    <div className={styles.cartContainer}>
      <div className={styles.buttonCartContainer}>
        <div className={styles.buttonCart}>
          {!cartOpen ? (
            <svg
              className={styles.open}
              width={'35px'}
              viewBox='0 0 30 27'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path

              />

            </svg>
          ) : (
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path

              />

            </svg>
          )}
        </div>
        {!cartOpen && <div className={styles.productsNumber}>{productsLength}</div>}
      </div>

      {cartItems && cartOpen && (
        <div>
          <h2>Your cart</h2>

          {cartItems.length === 0 ? <p>Your cart is empty</p> : (
            <div>{cartItems.map((item, i) => (
              <ItemCart key={i} item={item} />
            ))}
            </div>
          )}

          
        </div>
      )}
    </div>
  );
};

export default Cart;