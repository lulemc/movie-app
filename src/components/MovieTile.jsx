import React from 'react'
import styled from 'styled-components'
import { Image } from 'antd';
import { useNavigate } from 'react-router';

const Root = styled.div`
    margin: 20px;
    cursor: pointer;
`

const Title = styled.div`
    font-size: 17px;
    margin: 10px;
    font-weight: 500;
`
export default function MovieTile(props) {
    const movie = props.movie;
    const navigate = useNavigate();
    const goToDetails = () => {
        navigate(`/details/${movie.imdbID}`);
    }
    return (
        <Root onClick={() => goToDetails()}>
            <Image src={movie.Poster} width={'100%'} height={'auto'} preview={false} />
            <Title>{movie.Title} {`(${movie.Year})`}</Title>
        </Root>
    )
}
