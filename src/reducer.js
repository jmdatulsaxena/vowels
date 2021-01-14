/** Initially, we begin with data layer */
/**
 * Reducers: are how we dispatch this action into the data layer
 */
export const initialState = {
  basket: [],
  user: null,
};

// How to build selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

/** What we are trying to add to the basket or remove from the basket */
/** Reducer always litening to dispatcher */
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it is not in basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      console.log("User Name:", action.user);
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
