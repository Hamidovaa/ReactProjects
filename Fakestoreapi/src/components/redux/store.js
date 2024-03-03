import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./slices/themeSlice";
import cartReducer from './slices/cartSlice';

const store= configureStore({
    reducer: {
        theme: themeSlice,
        cart: cartReducer,
    },
});

export default store