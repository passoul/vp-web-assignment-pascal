import { ADD_MOVIE_TO_WATCHLIST, ADD_MOVIE_TO_WATCHED, MOVE_TO_WATCHLIST, REMOVE_FROM_WATCHED } from './actionTypes';
/**
 * Actions are plain JavaScript objects that have a type field. 
 * You can think of an action as an event that describes something that happened in the application.
 */

/**
 * 
 * @param {object} movie
 * @returns 
 */
export const addMovieToWatchlist = (movie) => {
    return{
        type: ADD_MOVIE_TO_WATCHLIST,
        payload: movie
    }
}
/**
 * 
 * @param {object} movie
 * @returns 
 */
export const addMovieToWatched = (movie) => {
    
    return{
        type: ADD_MOVIE_TO_WATCHED,
        payload: movie
    }
}
/**
 * 
 * @param {object} movie 
 * @returns 
 */
export const moveToWatchlist = (movie) => {
    return{
        type: MOVE_TO_WATCHLIST,
        payload: movie
    }
}
/**
 * 
 * @param {string} title - The title of the movie
 * @returns 
 */
export const removeFromWatched = (title) => {
    return{
        type: REMOVE_FROM_WATCHED,
        payload: title
    }
}
