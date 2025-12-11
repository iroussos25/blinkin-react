import { motion } from 'framer-motion'
import React, {useEffect, useState} from 'react'
import SearchCoinButton from './SearchCoinButton'
import axios from 'axios';
import { data, useParams } from 'react-router-dom';
import blinkin from '../assets/blinkin-Photoroom.png';
import no_image from '../assets/no_image.jpg'
import MovieCard from './MovieCard';
 

const Searchbox = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchId, setSearchId] = useState( ''); 
    
    async function fetchMovies(searchId) {
        setLoading(true)
        const {data} =
        await axios.get(`https://www.omdbapi.com/?s=${searchId}&apikey=279e89f2`);
        setMovies(data);
        setLoading(false);
        console.log (data);
    }
    function onSearch() {

        fetchMovies(searchId)
        console.log()
        
    }
    function onSearchKeyPress(key) {
        if (key === 'Enter') {
            onSearch();
        }
    }
    useEffect(() => {
        
        // fetchMovies();
    }, []);
    const getPoster = url => (url && url !== 'N/A' ? url : '/img/no_image.png');
    
      
    return (
        
        // <>
        <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={{opacity:1, y:0}}
        transition={{duration: 2, ease: 'easeInOut'}}
        className='search__container'
        >

<form action="" className="search__bar" onSubmit={handleSubmit}>
    <input type="text" id="search__input" placeholder="Search for movies..." value={searchId} onChange={(event) => setSearchId(event.target.value)} onKeyPress={(event) => onSearchKeyPress(event.key)}/>
    
        <SearchCoinButton />
    
</form>   
</motion.div>
     
//  {/* <div className="movie-list"> */}
          

        //    {/* <div className="movie-card__container">
               movies?.Search?.map(movie) => <MovieCard key={movie.imdbID} movie={movie}/>
            //        <div className="movie-card" key={movie.imdbID}>
            //         <div className="titleBox">

            //        <h3>{movie.Title}</h3>
            //         </div>
            //        <img src={movie.Poster} alt={movie.Title} className='movie-img'/>
            //        <p><b>Type:</b> {movie.Type}</p>
            //        <p><b>Year:</b> {movie.Year}</p>
            //        <a href={`https://www.imdb.com/title/${movie.imdbID}`} target='blank'> <p className='imdb__link'><b>View on IMDb</b></p></a>
                  
            //    </div>
            //    ))}
            //    </div> */}
            //    {/* </div>   */}
            //    {/* </> */}
   
        
    ) 
    
    
    function handleSubmit(event) {
        event.preventDefault(); 
        
        if (!searchId) return
         fetchMovies(searchId);

        
 
       


       
    }  
 

               

    


  


}

export default Searchbox


