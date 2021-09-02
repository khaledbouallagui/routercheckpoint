import React from 'react';
import { Link } from 'react-router-dom';
import Startrating from './Startrating';

const MovieCard = ({card}) => {
  return (
    <div className="movie-card">
    <Startrating rate={card.rating}/>
      <img src={card.image} alt="" />
      <h1>{card.name}</h1>
      <p>{card.date}</p>
      <Link to = {`/description/${card.name}`}>
      <button className="btn btn-primary" >see descreption</button>
      </Link>
    </div>
  );
}

export default MovieCard;
