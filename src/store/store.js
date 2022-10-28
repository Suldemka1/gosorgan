import {configureStore} from "@reduxjs/toolkit";
import navbarSliceReducer from "./slices/NavbarSlice";

export const store = configureStore({
    name: 'asd',
    reducer: {
        navbarSlice: navbarSliceReducer
    }
})
