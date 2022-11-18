
export const initialState = JSON.parse(localStorage.getItem('wishlistProducts')) || [];
console.log(initialState);


const reducer = (state, action) => {
  switch (action.type) {
    case 'AddToWishlist':

      const inWishlist = state.find((productInWishlist) => productInWishlist.id === action.payload.id);


      if (inWishlist) {
        return state;

      } else {
        console.log(state);
        console.log(action.payload);
        state = [...state, action.payload];
        console.log(state);
        return state
      }
    default:
      return state;
  }

}



export default reducer