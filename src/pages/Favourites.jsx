import React from 'react'
import styled from 'styled-components'
import { getFavs } from '../services/movieService'
import MovieTile from '../components/MovieTile'
const Root = styled.div`
    margin: 50px;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`
export default function Favourites() {
  const movies = getFavs()

  if(movies.length === 0) return <Root>No favourite movies </Root>
  return (
    <Root>
      {
        movies.map((movie) => (
          <MovieTile movie={movie} />
        ))
      }
    </Root>
  )
}
