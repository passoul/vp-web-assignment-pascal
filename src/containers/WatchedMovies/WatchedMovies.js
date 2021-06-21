import React from 'react'
import { MoviesList } from '../../components/GetMovies/GetMovies';

export const WatchedMovies = () => {
    return (
        <div>
            <h1>Watched Movies</h1>
            <MoviesList type="watched" />
        </div>
    )
}
