import { CART_TYPES } from "../types/cartTypes";

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0, // nb d'élément dans le panier
    cartTotal: 0, // prix total
};

export const CartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case CART_TYPES.TOOGLE_CART: {
            return {
                ...state,
                isCartOpen: !state.isCartOpen,
            };
        }
        case CART_TYPES.ADD_PRODUCT_TO_CART: {
            const itemFind = state.cartItems.findIndex(
                (item) => item.id === payload.id
            );
            if (itemFind === -1) {
                // insertion
                return {
                    ...state,
                    isCartOpen: true,
                    cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
                    cartCount: state.cartCount + 1,
                    cartTotal: state.cartTotal + payload.price,
                };
            } else {
                // incrementation
                const updatedItems = [...state.cartItems];
                updatedItems[itemFind].quantity += 1;
                return {
                    ...state,
                    isCartOpen: true,
                    cartItems: updatedItems,
                    cartCount: state.cartCount + 1,
                    cartTotal: state.cartTotal + payload.price,
                };
            }
        }
        case CART_TYPES.REMOVE_PRODUCT_TO_CART:
            const index = state.cartItems.findIndex((item) => item.id == payload.id);
            if (index === -1) {
                return state;
            } else {
                const removedItem = state.cartItems[index];
                if (removedItem.quantity > 1) {
                    const updatedItems = [...state.cartItems];
                    updatedItems[index].quantity -= 1;
                    return {
                        ...state,
                        cartItems: updatedItems,
                        cartCount: state.cartCount - 1,
                        cartTotal: state.cartTotal - payload.price,
                    };
                } else {
                    return {
                        ...state,
                        cartItems: state.cartItems.filter((item) => item.id != payload.id),
                        cartCount: state.cartCount - 1,
                        cartTotal: state.cartTotal - payload.price,
                    };
                }
            }
        default:
            return state;
    }
};