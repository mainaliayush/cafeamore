export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  CHANGE_CART_ITEMS: "CHANGE_CART_ITEMS"

};

export const CartReducer = (state = {
  user: null,
  foodItems: null,
  cartShow: false,
  cartItems: []
}, action) => {

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };

    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };

    case actionType.SET_CART_ITEMS:
      console.log("Items from set cart items", state.cartItems)
      const ItemIndex = state.cartItems?.findIndex((item) => item.id === action?.cartItems?.id);
      if (ItemIndex >= 0) {
        state.cartItems[ItemIndex].qty += 1
        return {
          ...state,
          cartItems: [...state.cartItems]
        }
      } else {
        return {
          ...state,
          cartItems: action.cartItems ? [...state.cartItems, action.cartItems] : [],
        };
      }
    case actionType.CHANGE_CART_ITEMS:
      console.log("Items from change cart items", state.cartItems)
      const remainingItems = state.cartItems?.filter((item) => item.id != action?.cartItems?.id);
      console.log("Remaining items", remainingItems)
      if (action?.cartItems?.qty >= 1){
        remainingItems.push(action?.cartItems);
      }
      
      return {
        ...state,
        cartItems: remainingItems,
      };

    default:
      return state;
  }
};