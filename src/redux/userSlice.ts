import { createSlice } from "@reduxjs/toolkit";

interface Type {
    isAuthorized: boolean | null;
    id: number | null;
}

const initialState: Type = {
    isAuthorized: null,
    id: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.isAuthorized = action.payload.isAuthorized;
            state.id = action.payload.id;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
