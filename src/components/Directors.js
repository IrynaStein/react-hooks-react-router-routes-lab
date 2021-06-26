import React from "react";
import { directors } from "../data";

function Directors() {

  const renderDirectors = directors.map((director) => (
    <div key={director.name}>
      <h3>{director.name}</h3>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>
            {movie}
          </li>
        ))}
      </ul>
    </div>
  ))
  return <div>
    <h1>Directors Page</h1>
    {renderDirectors}
  </div>
}

export default Directors;
