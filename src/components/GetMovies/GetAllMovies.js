import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { MovieCard } from '../MovieCard/MovieCard'
import './AllMovies.css'


export const AllMovies = () => {
    /**
     * useSelector automatically subscribes to the Redux store for us! That way, any time an action is dispatched, it will call its selector function again right away. 
     * If the value returned by the selector changes from the last time it ran, useSelector will force our component to re-render with the new data. 
     * All we have to do is call useSelector() once in our component, and it does the rest of the work for us.
     */
    const state = useSelector(state => state)

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    });
      
    return (
        <div className="movie-page">
            <div className="container">
                    {state.watchlist.length > 0 ? (
                        <div className="movie-grid">
                            {state.watchlist.map((movie) => ( 
                                <MovieCard key={movie.title} movie={movie} type="watchlist"/> 
                            ))}
                        </div>
                    ) : (
                        <h2 className="no-movies">No movies in your list, add some!</h2>
                    )}
            </div>
        </div>
    )
}
