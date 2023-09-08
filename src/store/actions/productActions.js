import { PRODUCTS_TYPES } from "../types/productTypes"

export const requestAllProductBegin = () => {
    return {
        type: PRODUCTS_TYPES.PRODUCTS_REQUEST_BEGIN
    }
}
export const requestAllProductSuccess = (products) => {
    return {
        type: PRODUCTS_TYPES.PRODUCTS_REQUEST_SUCCESS,
        payload: products
    }
}

export const requestAllProductFail = (error) => {
    return {
        type: PRODUCTS_TYPES.PRODUCTS_REQUEST_FAIL,
        payload: error
    }
}