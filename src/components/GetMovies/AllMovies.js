import React from 'react'
import { useSelector } from 'react-redux'
import { MovieCard } from '../MovieCard/MovieCard'
import './AllMovies.css'

const selectMovies = state => state.movies

export const AllMovies = () => {
    const movies = useSelector(selectMovies)
      
    return (
        <div className="movie-page">
            <div className="container">
                    {/* {movies.length > 0 && movies.map((movie) => ( <MovieCard movie={movie}/>))} */}
                    {movies.length > 0 ? (
                        <div className="movie-grid">
                            {movies.map((movie) => ( 
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
