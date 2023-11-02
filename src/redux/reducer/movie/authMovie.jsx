import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popular: [],
    detail: [],
    search: [],
    trailer: [],
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
        setTrailer: (state, action) =>{
            state.trailer = action.payload
        },
    }
})

export const { setMovie, setDetail, setSearch, setTrailer } = authMovie.actions

export default authMovie.reducer;