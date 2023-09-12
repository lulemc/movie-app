import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getMovieById } from '../services/movieService';
import styled from 'styled-components'
import { Divider, Image, Skeleton} from 'antd';
import FavouriteButton from '../components/FavouriteButton';

const Root = styled.div`
    margin: 50px;
    display: flex;
    gap: 50px;
    text-align: left;
`

const Details = styled.div`
    width: 80%;
`

const DetailRow = styled.div`
    font-size: 15px;
    display: flex;
    gap: 10px;
    margin: 10px 0;
`

const Key = styled.div`
    font-weight: 700;
`

const Plot = styled.div`
    text-align: left;
    margin-top: 2rem;
`

export default function MovieDetails() {
    const { imdbID } = useParams();
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        try {
            await getMovieById(imdbID).then((res) => {
                setMovie(res)
                setIsLoading(false)
            });

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchData()
    }, [imdbID])

    return (
        <Root>
            <div>
                {
                    !isLoading ?
                        <Image src={movie.Poster} width={'auto'} height={'70vh'} /> :
                        <Skeleton.Image active={true} size={'large'} />
                }
            </div>
            <Details>
                {!isLoading ?
                    <h1>{movie.Title} {`(${movie.Year})`} <FavouriteButton movie={movie} /></h1> :
                    <Skeleton.Button active={true} size={'large'} shape={'square'} block={true} />

                }
                {
                    !isLoading ?
                        <>
                            <DetailRow>
                                <Key>Runtime: </Key><div>{movie.Runtime}</div>
                                <Key>Genre: </Key><div>{movie.Genre}</div>
                                <Key>IMDB Rating: </Key><div>{movie.imdbRating}</div>
                            </DetailRow>
                            <DetailRow>
                                <Key>Director: </Key><div>{movie.Director}</div>
                            </DetailRow>
                            <DetailRow>
                                <Key>Writer: </Key><div>{movie.Writer}</div>
                            </DetailRow>
                            <DetailRow>
                                <Key>Actors: </Key><div>{movie.Actors}</div>
                            </DetailRow>
                            <DetailRow>
                                <Key>Country: </Key><div>{movie.Country}</div>
                                <Key>Language: </Key><div>{movie.Language}</div>
                                <Key>Released: </Key><div>{movie.Released}</div>
                            </DetailRow>
                            <Plot>{movie.Plot}</Plot></>
                        :
                        <>
                            <Divider />
                            <Skeleton.Button active={true} size={'large'} shape={'square'} block={true} />
                            <Skeleton.Button active={true} size={'large'} shape={'square'} block={true} />
                            <Skeleton.Button active={true} size={'large'} shape={'square'} block={true} />
                        </>
                }


            </Details>
        </Root>
    )
}
