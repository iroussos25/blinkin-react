import React from 'react'
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
  return (
   <div className="movie-card__container">
//       <div className="movie-card">
//         <h3>{movie.Title}</h3>
//         <img src={movie.Poster !== 'N/A' ? movie.Poster : './assets/no-image.jpg'} alt="${movie.Title}" />

//         <p><b>Type:</b> {movie.Type}</p>
//         <p><b>Year:</b> {movie.Year}</p>

//         <p className="imdb__link">
//           <b>imdbID:</b> {movie.imdbID}{''} 
//           <Link to={`/moviedetails/${movie.imdbID}`}>
            View Details
          </Link>
//         </p>
//       </div>
//     </div>
    
  )

}

export default MovieCard
