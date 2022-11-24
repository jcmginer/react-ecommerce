
const reducer = (state, action) => {
  switch (action.type) {
    case 'AddToWishlist':

      const inWishlist = state.find((productInWishlist) => productInWishlist.id === action.payload.id);

      console.log(inWishlist);
      if (inWishlist) {
        //localStorage.setItem('wishlistProducts', JSON.stringify([...state.splice(action.payload.id, 0)]))
        return state;

      } else {
        localStorage.setItem('wishlistProducts', JSON.stringify([...state, action.payload]))
        return state = [...state, action.payload];
      }



    default:
      return state;
  }

}



export default reducer



/* const reducer = (wishlistState, action) => {
  console.log(wishlistState);
  switch (action.type) {
    case 'AddToWishlist':
      const newProduct = action.payload;
      const wishlistContainProduct = wishlistState.find((product) => product.id === newProduct.id)
      console.log(wishlistState);

      return wishlistContainProduct ?? {
        ...wishlistState,
        wishlist: wishlistState.map(product => product.id === newProduct.id ? product : product)
      };
      break;
    default:
      return wishlistState;
  }

}



export default reducer  */