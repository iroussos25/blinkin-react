import React from 'react'
import { Link } from "react-router-dom";
import "../index.css"
import blinkin from '../assets/blinkin-Photoroom.png';


const MovieCard = ({movie}) => {
  return (

   <div className="movie-card__container">
       <div className="movie-card">
         <h3>{movie.Title}</h3>
         <img src={movie.Poster !== 'N/A' ? movie.Poster : '../assets/no_image.jpg'} alt="${movie.Title}"  className='movie-img' onError={(e) => e.target.src={blinkin}} />

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
