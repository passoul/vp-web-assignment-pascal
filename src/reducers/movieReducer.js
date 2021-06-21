  import { InitialState } from '../states/InitialState';
  import { ADD_MOVIE_TO_WATCHLIST, ADD_MOVIE_TO_WATCHED, MOVE_TO_WATCHLIST, REMOVE_FROM_WATCHED } from '../actions/actionTypes'
  /**
   * Reducers are functions that take the current state and an action as arguments, and return a new state result. 
   * In other words, (state, action) => newState.
   */

  /**
   * 
   * @param {obeject} state - Initial state of the app
   * @param {object} action 
   * @returns 
   */
  // update store based on type and payload and return the state
  const movieReducer = (state = InitialState, action) => {
    switch (action.type) {
      case ADD_MOVIE_TO_WATCHLIST:
        return {
          ...state,
          watchlist: [action.payload, ...state.watchlist],
        };
      case ADD_MOVIE_TO_WATCHED:
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (movie) => movie.title !== action.payload.title
          ),
          watched: [action.payload, ...state.watched],
        };
      case MOVE_TO_WATCHLIST:
        return {
          ...state,
          watched: state.watched.filter(
            (movie) => movie.title !== action.payload.title
          ),
          watchlist: [action.payload, ...state.watchlist],
        };
      case REMOVE_FROM_WATCHED:
        return {
          ...state,
          watched: state.watched.filter((movie) => movie.title !== action.payload),
        };
      default:
        return state;
    }
  }

  export default movieReducer;