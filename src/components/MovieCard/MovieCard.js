import React from 'react'
import { useDispatch } from 'react-redux'
import { addMovieToWatched, moveToWatchlist } from '../../actions/movieActions'
import './MovieCard.css'

export const MovieCard = ({ movie, type }) => {
    // This stores the dispatch function for using in the component
    const dispatch = useDispatch()
    return (
        <div className="movie-card">
            <div className="overlay"></div>
            <div className="inner-card-title">
                {movie.title}
            </div>
            {movie.image ? (<img src={movie.image} alt={`${movie.title} Poster`} />) : (<div className="filler-poster"></div>)}
            {type === "watchlist" && (
                <div className="inner-card-controls">
                    <button className="ctrl-btn" onClick={() => dispatch(addMovieToWatched(movie))}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>
                </div>
            )}
            {type === "watched" && (
                <div className="inner-card-controls">
                    <button className="ctrl-btn" onClick={() => dispatch(moveToWatchlist(movie))}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>
                </div>
            )}
        </div>
    )
}