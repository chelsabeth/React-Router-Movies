import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from "./MovieList";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">
      <Link exact className="home-button" to="/">Home</Link>
      {/* <Route exact path="/" component={MovieList} /> */}
    </div>
  </div>
);

export default SavedList;
