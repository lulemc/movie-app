import React, { useState } from 'react'
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { addToFav, isFavourite, removeFromFav } from '../services/movieService';

export default function FavouriteButton(props) {
    const { movie } = props;
    const [isFav, setIsFav] = useState(isFavourite(movie.imdbID))

    const addToFavs = () => {
        addToFav(movie)
        setIsFav(true)
    }

    const remove = () => {
        removeFromFav(movie.imdbID)
        setIsFav(false)
    }

    return (
        <>
            {isFav ? <StarFilled onClick={remove}></StarFilled> :
                <StarOutlined onClick={addToFavs}></StarOutlined>}
        </>

    )
}
