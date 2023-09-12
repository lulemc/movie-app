import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store/store"
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import Favourites from './pages/Favourites';
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const favs = JSON.parse(localStorage.getItem("favs"))
if(!favs){
  localStorage.setItem("favs", JSON.stringify([]));
}


function NavbarWrapper() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <MovieList />

      },
      {
        path: "/details/:imdbID",
        element: <MovieDetails />

      },
      {
        path: "/favs",
        element: <Favourites />
        ,
      },
    ]
  }
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
