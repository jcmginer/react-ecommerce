import { useReducer } from "react";
import reducer from "./Reducer";
import WishlistContext from "./WishlistContext";

const WishlistProvider = ({ children }) => {

  const productsWishlistLocalStorage = localStorage.getItem('wishlistProducts');
  const initialState = JSON.parse(productsWishlistLocalStorage) ?? [];

  const [wishlistState, dispatch] = useReducer(reducer, initialState)

  const providerValue = { wishlistState, dispatch }

  return (
    <WishlistContext.Provider value={providerValue}>{children} </WishlistContext.Provider>
  )
}

export default WishlistProvider;