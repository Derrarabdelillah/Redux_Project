import { configureStore } from "@reduxjs/toolkit";
import calculationsReducer from "./features/calculations/calcSlice";

export const store = configureStore({
    reducer: {
        calculations: calculationsReducer
    },
})