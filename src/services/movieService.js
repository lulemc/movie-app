import axios from "axios";

const URL = process.env.REACT_APP_API_URL

async function getMoviesBySearch(searchString, page) {
    try {
        return axios.get(`${URL}&s=${searchString}&type=movie&plot=short&page=${page}`).then((res) => {
            return res.data;
        });
    } catch (error) {
        console.log(error)
        return error
    }
}

async function getMovieById(id) {
    try {
        return axios.get(`${URL}&i=${id}&plot=full`).then((res) => {
            return res.data;
        });
    } catch (error) {
        console.log(error)

        return error
    }
}

function addToFav(movie) {
    const favs = JSON.parse(localStorage.getItem("favs"));
    const newFavs = favs;
    newFavs.push(movie)
    localStorage.setItem("favs", JSON.stringify(newFavs));
}

function removeFromFav(id) {
    const favs = JSON.parse(localStorage.getItem("favs"));
    const newFavs = favs.filter((movie) => movie.imdbID !== id);
    localStorage.setItem("favs", JSON.stringify(newFavs));
}

function isFavourite(id) {
    const favs = JSON.parse(localStorage.getItem("favs"));
    for (let i = 0; i < favs.length; i++) {
        if (favs[i].imdbID === id) {
            return true
        }
    }
    return false;
}

function getFavs() {
    return JSON.parse(localStorage.getItem("favs"));

}

export {
    getMoviesBySearch,
    getMovieById,
    addToFav,
    removeFromFav,
    isFavourite,
    getFavs
}