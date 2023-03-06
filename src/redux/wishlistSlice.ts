import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getWishList } from "./api";

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    popularity: number;
    backdgroundPath: string;
    release_date: string;
    original_language: string;
    vote_average: number;
    voteCount: number;
}

export type MoviesState = {
    status: "idle" | "loading" | "failed";
    list: Movie[];
};

const initialState: MoviesState = {
    status: "idle",
    list: [],
};

export const moviesSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        remove: (state, action) => {
            state.list = state.list.filter((e) => e.id != action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWishList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchWishList.fulfilled, (state, action) => {
                state.status = "idle";
                state.list = [...action.payload.items];
            })
            .addCase(fetchWishList.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const fetchWishList = createAsyncThunk(
    "wishlist/fetchWishList",
    async (lang: string) => {
        const response = await getWishList(lang);

        return response.data;
    }
);

export const { remove } = moviesSlice.actions;
export default moviesSlice.reducer;
