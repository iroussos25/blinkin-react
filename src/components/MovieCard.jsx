import React from 'react'
import { Link, Navigate } from "react-router-dom";
import "../index.css"
import noImage from '../assets/no_image.jpg';


const MovieCard = ({movie}) => {

  // Navigate(\/movie/${id, { state: { searchResults: movies}}})

  return (

   <div className="movie-card__container">
       <div className="movie-card">
         <h3>{movie.Title}</h3>
         <img src={movie.Poster !== 'N/A' ? movie.Poster : noImage} alt="${movie.Title}"  className='movie-img' onError={(e) => e.target.src=noImage} />

         <p><b>Type:</b> {movie.Type}</p>
         <p><b>Year:</b> {movie.Year}</p>

         <p className="imdb__link">
            
           <Link to={`/moviedetails/${movie.imdbID}`}>
            View Details
          </Link>
         </p>
       </div>
     </div>
    
  )

}

export default MovieCard
