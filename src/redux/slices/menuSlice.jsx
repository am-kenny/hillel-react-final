import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PIZZA_API} from "../../constants.js";


const initialState ={
    menuItems: [],
    isLoading: false,
    isError: false
}

export const getMenuItems = createAsyncThunk(
    "menu/getMenuItems",
    async (_,{rejectWithValue}) => {
        try {
            const response = await fetch(`${PIZZA_API}/menu`);
            if (!response.ok) {
                throw new Error("Failed to fetch")
            }

            const {data} = await response.json();
            return data;

        } catch (e) {
            console.error(e.message);
            return(rejectWithValue(e.message));
        }

    }
)

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMenuItems.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(getMenuItems.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.menuItems = payload;
        });
        builder.addCase(getMenuItems.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
})

export default menuSlice.reducer;

