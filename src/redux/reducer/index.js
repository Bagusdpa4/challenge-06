import { combineReducers } from "@reduxjs/toolkit";
import authLogin from "./auth/authLogin";
import authMovie from "./movie/authMovie";

export default combineReducers({
    auth : authLogin,
    movie : authMovie,
})