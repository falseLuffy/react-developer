import { combineReducers } from 'redux'

const initialState = {
   cart: [
      {
         product: 'bread 700g',
         quantity: 2,
         unitCost: 90
      },
      {
         product: 'milk 500ml',
         quantity: 1,
         unitCost: 47
      }
   ]
}

function cart(state = initialState, action) {
   if(action.type === '请求增援'){
      state.cart.splice(0,1);

      return {cart:[...state.cart]}
   }
   return state
}

function a(state={a:1,b:2},action) {
   if(action.type==='修改'){
      return Object.assign({},state,action.data)
   }
   return state
}


export default combineReducers({cart,a})