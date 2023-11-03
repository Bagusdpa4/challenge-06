import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popular: [],
    detail: [],
    search: [],
}

const authMovie = createSlice({
    name : "authMovie",
    initialState ,
    reducers :{
        setMovie: (state, action) =>{
            state.popular = action.payload
        },
        setDetail: (state, action) =>{
            state.detail = action.payload
        },
        setSearch: (state, action) =>{
            state.search = action.payload
        },
    }
})

export const { setMovie, setDetail, setSearch } = authMovie.actions

export default authMovie.reducer;