import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
 
};
 const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, { payload }) => {
      //loop through the cart item and check if payload item already exists or not

    //   if exists, just increase the quanitty based on what is coming in payload
    // else simply, destructure the existing list and add this payload
    state.cartItems=payload
    },
  },
});

 const {reducer,actions} = cartSlice
export const {setCartItems} = actions

export default reducer
