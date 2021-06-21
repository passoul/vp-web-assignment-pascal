import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Home} from './containers/Home/Home';
import {WatchedMovies} from './containers/WatchedMovies/WatchedMovies';
import {AddMovie} from './containers/AddMovie/AddMovie';


import './App.css';
import './lib/font-awesome/css/all.min.css';

// import { add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';

// const getMoviesComponents = (movies) => {
//   var components = [];

//   movies.forEach(function(movie) {
//     components.push(
//       <div className="all">
//         <div>
//           <img src={movie.image} height="100px" />
//         </div>
//         <span>
//           <a className="movie-watched" href="#" onClick={function() { addWatchedMovie(movie.title, movie.comment, movie.image) }}>
//             {movie.title}
//           </a>
//         </span>
//         <br />
//         <span>
//           {movie.comment}
//         </span>
//         <br />
//         <br />
//       </div>
//     )
//   })

//   return components;
// }

// function getWatchedMoviesComponents(movies) {
//   var components = [];

//   movies.forEach(function(movie) {
//     components.push(movie && (
//       <div className="watched">
//         <div>
//           <img src={movie.image} height="100px" />
//         </div>
//         <span>
//           <a className="movie-watched" href="#" onClick={function() { removeWatchedMovie(movie.title) }}>
//             {movie.title}
//           </a>
//         </span>
//         <br />
//         <span>
//           {movie.comment}
//         </span>
//         <br />
//         <br />
//       </div>
//     ))
//   })

//   return components;
// }

// function App(props) {
//   return (
//     <div className="App">
//       <h1>Codest Movies!</h1>
//       <h1>Add movie!</h1>
//       <b>TITLE:<br /><input type="text" onChange={function(e) { title = e.target.value; }} /></b><br />
//       <b>IMAGE URL:<br /><input type="text" onChange={function(e) { image = e.target.value; }} /></b><br />
//       <b>COMMENT:<br /><input type="text" onChange={function(e) { comment = e.target.value; }} /></b><br />
//       <input type="button" onClick={function(e) { add(title, image, comment); }} value="ADD MOVIE" />

//       <h1>Watchlist:</h1>
//       {getMoviesComponents(getAllMovies())}

//       <h1>Already watched:</h1>
//       {getWatchedMoviesComponents(getWatchedMovies())}
//     </div>
//   );
// }

// var title = '';
// var image = '';
// var comment = '';
/**
 * Components are the heart of React's powerful, declarative programming model. 
 * React Router is a collection of navigational components that compose declaratively with your application. 
 * Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever
 * React is rendering
 * https://reactrouter.com/web/guides/quick-start
 */

export default App;
function App(){
  return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/watched">
            <WatchedMovies/>
          </Route>
          <Route path="/Add">
            <AddMovie/>
          </Route>
        </Switch>
      </Router>
  );
}
