
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
