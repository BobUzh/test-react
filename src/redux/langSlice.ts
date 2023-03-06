import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { value: "en-US" };

export const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        toggleUS: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        toggleUKR: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { toggleUS, toggleUKR } = langSlice.actions;
export default langSlice.reducer;
