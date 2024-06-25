
import { configureStore } from "@reduxjs/toolkit";
import myreducer from './productSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, myreducer)
const store=configureStore({
    reducer:{
        shop:persistedReducer
    }
})
  export const persistor = persistStore(store)
export default store;