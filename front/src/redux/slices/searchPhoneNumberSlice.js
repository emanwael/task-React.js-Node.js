import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = {
    phoneData: {},
    isLoading: false
};

const URL = 'http://localhost:5000/search/';

export const getDataForPhoneNumber = createAsyncThunk("phoneData", async (number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const response = await axios.get(URL + number)
        console.log(response.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error.message)

    }
})

const SearchPhoneNumberSlice = createSlice({
    name: "phone",
    initialState,
    reducers: {
        removeData: (state, action) => {
            state.phoneData = {};
        }
    },
    extraReducers: {
        [getDataForPhoneNumber.pending]: (state, action) => {
            state.isLoading = true
        },
        [getDataForPhoneNumber.fulfilled]: (state, action) => {
            state.isLoading = false
            state.phoneData = action.payload
            console.log("phoneeeeee", state.phoneData);

        },
        [getDataForPhoneNumber.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        },
    }
})
export const SearchPhoneNumberReducer = SearchPhoneNumberSlice.reducer;
export const SearchPhoneNumberActions = SearchPhoneNumberSlice.actions;