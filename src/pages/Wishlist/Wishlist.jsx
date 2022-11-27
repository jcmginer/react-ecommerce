import React, { useContext } from 'react'
import { CartContext } from '../../components/Cart/Context/CartContext';
import TopNav from '../../components/TopNav/TopNav';
import WishlistContext from './WishlistContext';
import Footer from '../../components/Footer/Footer';
import '../../components/ItemCart/itemCart.css';
import './wishlist.css'
import Cart from '../../components/Cart/Cart';

const Wishlist = () => {
  const { wishlistState } = useContext(WishlistContext);
  const { addItemToCart } = useContext(CartContext);
  const inWishlist = wishlistState;
  console.log(inWishlist);
  return (
    <>
      <TopNav />

      <div className='wishlistHeader'>
        <Cart />
        <h2 className='wishlistTitle'>Wishlist</h2>
      </div>
      <div className='wishlistContainer'>
        <div className='wishlistItem'>
          {inWishlist.length === 0 ? (
            <p>Your Wishlist is empty</p>
          ) : (
            <div className='dropdown'>
              {inWishlist.map((item) => (
                <div className="table d-flex justify-content-end">
                  <img className="imgItemCart" src={item.img} alt={item.name} />
                  <div className="dataContainer">
                    <div className="dataContainerLeft">
                      <p>{item.name}</p>
                      <div className="buttons">
                        <button className="btn btn-success p-0 m-3" onClick={() => addItemToCart(item)}>
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                    <div className="dataContainerRight">
                      <p className='wishlistPrice'>{item.price}€</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Wishlist