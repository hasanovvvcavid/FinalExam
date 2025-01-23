import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productSlice from "../features/productSlice"
import basketSlice from "../features/basketSlice"


const persistProductConfig = {
    key: 'root',
    storage,
}
const persistBasketConfig = {
    key: 'basket',
    storage,
}

const persistedProductReducer = persistReducer(persistProductConfig, productSlice)

const persistedBasketReducer = persistReducer(persistProductConfig, basketSlice)


export const store = configureStore({
    reducer: {
        products: persistedProductReducer,
        basket: persistedBasketReducer,
  },
})

export const persistor = persistStore(store)
export default store