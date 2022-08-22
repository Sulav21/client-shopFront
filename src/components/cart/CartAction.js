import {setCartItems} from './CartSlice'


export const cartAction=(product)=>async dispatch=>{
    dispatch(setCartItems(product))
// console.log(product)
}

