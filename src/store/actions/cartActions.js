import { CART_TYPES } from "../types/cartTypes"

export const toogleCart = () => {
    return {
        type: CART_TYPES.TOOGLE_CART
    }
}

export const addProductToCart = (product) => {
    return {
        type: CART_TYPES.ADD_PRODUCT_TO_CART,
        payload: product
    }
}

export const removeProductFromCart = (product) => {
    return {
        type: CART_TYPES.REMOVE_PRODUCT_TO_CART,
        payload: product
    }
}