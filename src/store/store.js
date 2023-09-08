import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import { ProductReducer } from './reducers/productReducer'
import { CartReducer } from './reducers/cartReducer'
import { logger } from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
// middleware -> code qui s'execute avant chaque action 
// Fichier de configuration 
/*
const logger = (store) => (next) => (action) => {
    console.log(action, "Action dispatcher")
    let result = next(action)
    console.log("Nouvel Etat" , store.getState())
    return result
}
*/
// THUNK et SAGA 

const middlewares = [logger]

// Root reducer 
const rootReducer = combineReducers({
    // ici tout nos réducers
    products: ProductReducer,
    cart: CartReducer
})

// configuration de la persistance des données à garder en session
const persistConfig = {
    key: "root",
    storage,
    blacklist: ["products"] // on ne sauvegarde pas product dans le storage
}
// persisted reducers
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Composition 
const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, composedEnhancers)
export const persistor = persistStore(store)

// reducers
// actions
// selectors
// types