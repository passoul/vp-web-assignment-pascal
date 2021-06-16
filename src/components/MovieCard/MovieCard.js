import React from 'react'
import './MovieCard.css'

export const MovieCard = ({ movie, type }) => {
    return (
        <div className="movie-card">
            <div className="overlay"></div>
            <div className="inner-card-title">
                {movie.title}
            </div>
            {movie.image ? (<img src={movie.image} alt={`${movie.title} Poster`} />) : (<div className="filler-poster"></div>)}
            {type === "watchlist" && (
                <div className="inner-card-controls">
                    <button className="ctrl-btn">
                        <i className="fa-fw far fa-eye"></i>
                    </button>
                </div>
            )}
            {type === "watched" && (
                <div className="inner-card-controls">
                    <button className="ctrl-btn">
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button className="ctrl-btn">
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </div>
            )}
        </div>
    )
}
