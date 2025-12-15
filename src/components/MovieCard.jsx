import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import "../index.css"
import noImage from '../assets/no_image.jpg';


const MovieCard = ({movie}) => {
  
  
          const [img, setImg] = useState(null);
        const [loading, setLoading] = useState(true);
        const mountedRef = useRef(true);
        
    useEffect(() => {
      mountedRef.current = true;
      setLoading(true);
        const image = new Image();
        image.src = movie.Poster;
        image.onload = () => {
            setTimeout(() => {
                if (mountedRef.current){

                    setImg(image);
                    setLoading(false);
                }
        }, 2000);
        };

        image.onerror = ()=>{
          if (mountedRef.current) {
            setLoading(false);
          }
        };

return () => {
mountedRef.current = false;
};
    }, [movie.Poster]);

    return (
    
    <div className="movie-card__container">
      {loading ? (
        <div className="movie-card--skeleton">
          <div className="skeleton-title"></div>
          <div className="skeleton-image"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
        </div>
      ) : (
     <Link to={`/moviedetails/${movie.imdbID}`}>
       <div className="movie-card" key={movie.imdbID}>

         <h3>{movie.Title}</h3>
         <img src={movie.Poster !== 'N/A' ? movie.Poster : noImage} alt={movie.Title} className='movie-img' onError={(e) => e.target.src=noImage} />

         <p><b>Type:</b> {movie.Type}</p>
         <p><b>Year:</b> {movie.Year}</p>

             </div>
          </Link>
        
      )}
    </div>
 
);
};

export default MovieCard
