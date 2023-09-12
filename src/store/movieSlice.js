import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        page: 1,
        searchText: ""
    },
    reducers: {
        loadResults: (state, action) => {
            state.movies = [...state.movies, ...action.payload]
        },
        incerementPage: (state) => {
            state.page += 1
        },
        changeSearchText: (state, action) => {
            state.searchText = action.payload
        },
        deleteMovies: (state) => {
            state.movies = []
            state.page = 1
        }
    }
})

export const { loadResults, incerementPage, changeSearchText, deleteMovies } = movieSlice.actions

export default movieSlice.reducer