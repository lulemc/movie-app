import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesBySearch } from '../services/movieService'
import { incerementPage, loadResults } from '../store/movieSlice'
import MovieTile from '../components/MovieTile'
import styled from 'styled-components'

const Root = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin: 30px;
`

export default function MovieList() {
    const movies = useSelector(state => state.movies.movies)
    const searchText = useSelector(state => state.movies.searchText)
    const page = useSelector(state => state.movies.page)

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("Something is wrong...");

    const dispatch = useDispatch();

    const getMovies = () => {
        fetchData(searchText === "" ? "BATMAN" : searchText)
    }

    const fetchData = async (text) => {
        dispatch(incerementPage())
        setIsLoading(true);

        try {
            await getMoviesBySearch(text, page).then((res) => {
                if (res.Error) {
                    setError(res.Error)
                } else {
                    dispatch(loadResults(res.Search))

                }
            });
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    };

    const handleScroll = () => {
        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 5) {
            getMovies()
        }
    };

    useEffect(() => {
        if (movies.length === 0) {
            getMovies()
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        /* eslint-disable */
    }, [searchText, isLoading]);

    return (
        <Root>
            {isLoading ? <div>LOADING...</div> : <></>}
            {
                movies.length !== 0 ?
                    movies.map((movie) => (
                        <MovieTile movie={movie} key={movie.imdbID}>{movie.Title}</MovieTile>
                    ))
                    : <></>
            }
            {
                movies.length === 0 && !isLoading ? <div>{error}</div> : <></>
            }
        </Root>
    )
}
