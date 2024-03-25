import formReducer from './slices/formSlice';
import productReducer from '../store/slices/productSlice'
import { configureStore } from "@reduxjs/toolkit";


export default configureStore({
  reducer: {
    form: formReducer,
    products: productReducer,
  },
});
