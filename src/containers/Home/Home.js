import React from 'react';
import { MoviesList } from '../../components/GetMovies/GetMovies';

export const Home = () => {
    return (
        <div className="container">
            <h1>All Movies</h1>
            <MoviesList type="watchlist" />
        </div>
    )
}