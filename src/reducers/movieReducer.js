  import { InitialState } from '../states/InitialState';
  
  // update store based on type and payload and return the state
  const movieReducer = (state = InitialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  }

  export default movieReducer;