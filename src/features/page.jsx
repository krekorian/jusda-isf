import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState: { value: 0 },
    reducers: {
        next: (state, action) => {
            // console.log(`next state ${state}`)
            // console.log(state.value);
            // console.log(action)
            state.value = state.value + 1;
        },
        back: (state, action) => {
            // console.log(`back state ${state}`)
            // console.log(state.value);
            // console.log(action);
            state.value = state.value - 1;
        },
    },
});
export const { back } = pageSlice.actions;
export const { next } = pageSlice.actions;
export default pageSlice.reducer;