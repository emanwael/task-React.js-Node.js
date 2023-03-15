import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    user: {
        name: "",
        password: ""
    },
    isLogin: false
};
const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {

    },
})
export const UserReducer = UserSlice.reducer;
export const UserActions = UserSlice.actions;