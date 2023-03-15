import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:5000/history";
let initialState = {
    history: [],
    isLoading: false,
};

export const getAllHistoryItems = createAsyncThunk(
    "history/getAll",
    async (args, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get(URL);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addHistoryItem = createAsyncThunk(
    "history/add",
    async (HistoryItem, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.post(URL, HistoryItem);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const removeAllHistory = createAsyncThunk(
    "history",
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.delete(URL);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
const HistoryItemsSlice = createSlice({
    name: "HistoryItems",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllHistoryItems.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getAllHistoryItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.history = action.payload;
        },
        [getAllHistoryItems.rejected]: (state, action) => {
            state.isLoading = false;
        },

        [removeAllHistory.fulfilled]: (state, action) => {
            state.history = [];
        },

    },
});

export const HistoryItemsReducer = HistoryItemsSlice.reducer;
export const HistoryItemsActions = HistoryItemsSlice.actions;
