/* 
Les reducers sont des fonctions qui prennent en entrée
l'etat actuel de mon application et un action -> retournent un nouvel état pour l'application
*/

import { PRODUCTS_TYPES } from "../types/productTypes"

// function (state, action)

// state : {
//     currentUser : null, 
//     token : null, 
//     id : 0
// }

// // action 
// action: : {
//    type : String, // "OPEN_CART",
//    payload : any 
// }
// etat initial complet
const INITIAL_STATE = {
    products: [],
    loading: false,
    error: null,
    search: '',
    category: 'Tout',
    currentPage: 1,
    itemPerPage: 15,
    totalItem: 0
}

export const ProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCTS_TYPES.PRODUCTS_REQUEST_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case PRODUCTS_TYPES.PRODUCTS_REQUEST_SUCCESS: {
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null,
                // 
            }
        }
        case PRODUCTS_TYPES.PRODUCTS_REQUEST_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default:
            return state
    }


}