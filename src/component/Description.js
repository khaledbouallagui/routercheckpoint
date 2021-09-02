import React from "react";
import { Link } from "react-router-dom";

const Description = ({ movies, match }) => {
  return (
    <div>
      {movies
        .filter((movie) => movie.name === match.params.name)
        .map((el, i) => (
          <div key={i} className="movie-card">
            <h1>{el.name}</h1>
            <p>{el.desc}</p>
            <iframe
              width="350"
              height="315"
              src={el.trailer}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <Link to="/">
              <button className="btn btn-primary">Go back</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Description;
