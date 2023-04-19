import { configureStore } from '@reduxjs/toolkit'
import  Userslice  from './slices/userslice'

export const store = configureStore({
  reducer: {
    user:Userslice,
  },
});


export default store;