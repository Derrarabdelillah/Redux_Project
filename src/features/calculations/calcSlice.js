import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: 0,
}

export const calcSlice = createSlice({
    name: 'calculations',
    initialState,
    reducers: {
        add: (state, action) => {
            const { firstNumber, secondNumber } = action.payload;
            const result = Number(firstNumber) + Number(secondNumber);
            state.result = result;
        },

        subtract: (state, action) => {
            const { firstNumber, secondNumber } = action.payload; 
            const result = Number(firstNumber) - Number(secondNumber);
            state.result = result;
        },
        
        multiply: (state, action) => {
            const { firstNumber, secondNumber } = action.payload; 
            const result = Number(firstNumber) * Number(secondNumber);
            state.result = result;
        },
        
        divide: (state, action) => {
            const { firstNumber, secondNumber } = action.payload; 
            const result = Number(firstNumber) / Number(secondNumber);
            state.result = result;
        }
    }
})

export const { add, subtract, multiply, divide } = calcSlice.actions;
export default calcSlice.reducer;