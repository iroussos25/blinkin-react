import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import "../index.css"
import noImage from '../assets/no_image.jpg';


const MovieCard = ({movie}) => {
  
  // const navigate = useNavigate();
  // const handleMovieClick = (movie) => {

  //   navigate(`/movie/${movie.imdbID}`,
  //   { state: { searchResults: movie }})
  // }
          const [img, setImg] = useState();

        const mountedRef = useRef(true);
        
    useEffect(() => {
        const image = new Image();
        image.src = movie.Poster;
        image.onload = () => {
            setTimeout(() => {
                if (mountedRef.current){

                    setImg(image);
                }
        }, 300);
        }


  return () => {

  mountedRef.current = false;
  }
})
return (

    
    <div className="movie-card__container">
      img ? (
        <>
     <Link to={`/moviedetails/${movie.imdbID}`}>
       <div className="movie-card" key={movie.imdbID}>

         <h3>{movie.Title}</h3>
         <img src={movie.Poster !== 'N/A' ? movie.Poster : noImage} alt={movie.Title} className='movie-img' onError={(e) => e.target.src=noImage} />

         <p><b>Type:</b> {movie.Type}</p>
         <p><b>Year:</b> {movie.Year}</p>

             </div>
          </Link>
        
        </>
    
  ) : (

     <> 
   
<div className="movie-card--skeleton"></div>
    </>
  )

     </div>
);
};

export default MovieCard
