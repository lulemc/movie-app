import React from 'react'
import { Input } from 'antd';
import { getMoviesBySearch } from '../services/movieService';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchText, deleteMovies } from '../store/movieSlice';
import { useNavigate } from 'react-router';

const { Search } = Input;

export default function Searchbar() {
    const searchText = useSelector(state => state.movies.searchText)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onSearch = (e) => {
        getMoviesBySearch(e, 1)
        dispatch(changeSearchText(e))
        if (searchText !== e) {
            dispatch(deleteMovies())
        }
        navigate(`/`);
    }

    return (
        <Search placeholder="Write something else if you don't interested in Batman movies"
            onSearch={onSearch} style={{ width: 500 }} />
    )
}
