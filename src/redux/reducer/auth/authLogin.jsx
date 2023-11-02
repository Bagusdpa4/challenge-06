import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : undefined ,
    isLogin : "",
    user : ""
}

const authLogin = createSlice({
    name : "loginAuth",
    initialState ,
    reducers :{
        setToken: (state, action) => {
            state.token = action.payload;
          },
        setIsLoggedIn: (state, action) => {
            state.isLogin = action.payload;
          },
        setUser: (state, action) => {
            state.user = action.payload;
          },
    }
})

export const { setToken, setIsLoggedIn, setUser } = authLogin.actions;


export default authLogin.reducer;