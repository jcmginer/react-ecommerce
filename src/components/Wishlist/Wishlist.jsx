import { useEffect } from "react"
import { useReducer } from "react"
import reducer, { initialState } from "./Reducer"

const Wishlist = ({ id, name, price, img }) => {

  const [wishlist, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('wishlistProducts', JSON.stringify(wishlist))
    console.log(wishlist);
  }, [wishlist]);

  const action = {
    type: 'AddToWishlist',
    payload: { id, name, price, img }
  };
  return (
    <>

      <div>
        <button onClick={() => dispatch(action)}>Add Wishlist</button>
      </div>

    </>
  )
}

export default Wishlist