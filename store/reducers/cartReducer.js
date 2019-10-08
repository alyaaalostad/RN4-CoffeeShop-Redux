import { REMOVE_ITEM, ADD_ITEM, CHECKOUT } from "../actions/types";
const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload),
        quantity: state.quantity - action.payload.quantity
      };
    case ADD_ITEM:
      let Item_new = state.items.find(
        item =>
          action.payload.drink === item.drink &&
          action.payload.option === item.option
      );

      if (Item_new) {
        Item_new.quantity += action.payload.quantity;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat(action.payload)
        };
      }
    case CHECKOUT:
      return {
        ...state,
        items: [],
        quantity: 0
      };
    default:
      return state;
  }
};

export default cartReducer;
