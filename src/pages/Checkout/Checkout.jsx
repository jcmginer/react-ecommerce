import React, { useContext } from 'react';
import { CartContext } from '../../components/Cart/Context/CartContext';
import TopNav from '../../components/TopNav/TopNav';
import Footer from '../../components/Footer/Footer';
import ItemCart from '../../components/ItemCart/ItemCart';
import './checkout.css'
import SubmissionForm from '../../components/Forms/SubmissionForm';

const Checkout = () => {

  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price, 0
  );

  return (
    <>
      <TopNav />
      <div className='checkoutHeader'>
        <h2 className='checkoutTitle'>Checkout</h2>
      </div>
      <div className='checkoutContainer'>
        <div className='checkoutItem'>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className='dropdown'>
              {cartItems.map((item) => (
                <ItemCart key={item.id} item={item} />
              ))}
            </div>
          )}
          <h2 className='totalCheckout'>Total: {total}€</h2>
        </div>
        <div className='checkoutForm'>
          <SubmissionForm />
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Checkout