import { configureStore } from "@reduxjs/toolkit";
import { SearchPhoneNumberReducer } from "./slices/searchPhoneNumberSlice";
import { UserReducer } from "./slices/userSlice";
import { HistoryItemsReducer } from "./slices/history";


const store = configureStore({
    reducer: {
        userSlice: UserReducer,
        searchSlice: SearchPhoneNumberReducer,
        historySlice: HistoryItemsReducer
    },
});

export default store;