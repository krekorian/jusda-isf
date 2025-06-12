import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./features/page";
import isfReducer from "./features/isf";


export const store = configureStore({
    reducer: {
        page: pageReducer,
        isf: isfReducer,
    }
})

export default store;