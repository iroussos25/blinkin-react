import { motion } from 'framer-motion'
import React, {useEffect, useState} from 'react'
import SearchCoinButton from './SearchCoinButton'
import axios from 'axios';
import { data, useParams } from 'react-router-dom';
import blinkin from '../assets/blinkin-Photoroom.png';
import no_image from '../assets/no_image.jpg'
 

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
      <div className="movie-list">

        {/* <div className="movie-card__container"> */}
            {movies?.Search?.map(({ imdbID, Title, Poster, Type, Year }) => (
  <div className="movie-card" key={imdbID}>
    <div className="title-box">

    <h3>{Title}</h3>
    </div>
    <img
      src={getPoster(Poster)}
      alt={Title}
      className="movie-img"
      onError={e => { e.currentTarget.src = no_image; }} // fallback if the URL 404s
    />
    <p><b>Type:</b> {Type}</p>
    <p><b>Year:</b> {Year}</p>
    <a
      href={`https://www.imdb.com/title/${imdbID}`}
      target="_blank"
      rel="noopener noreferrer"
      className="imdb__link"
    >
      <b>imdbID:</b> {imdbID}
    </a>
  </div>
))}
            {/* {movies?.Search?.map((movie) => (
                <div className="movie-card" key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <img src={movie.Poster || no_image }  alt={movie.Title} className='movie-img'/>
                <p><b>Type:</b> {movie.Type}</p>
                <p><b>Year:</b> {movie.Year}</p>
                <a href={`https://www.imdb.com/title/${movie.imdbID}`} target='blank'><p className='imdb__link'><b>imdbID:</b>{movie.imdbID}</p></a>
                
            </div>
            ))} */}
            {/* </div> */}
            // </div>  
           
            
    )

    function handleSubmit(event) {
        event.preventDefault(); // stop the page refresh
        fetchMovies(searchId);
        // run your animation delay here if you want
        // fetchMovies();
        setTimeout(() => {
            // run your search here
        }, 1400); // or whatever timing matches your animation
    }  
    
    return (
        
        
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

 // useEffect(() => {
        
    //     fetchMovies();
    // }, []);
    // return (
      
    // <div className="movie-list">
            
    //        <div className="movie-card__container">
    //            {movies?.Search?.map((movie) => (
    //                <div className="movie-card" key={movie.imdbID}>
    //                <h3>{movie.Title}</h3>
    //                <img src={movie.Poster} alt={movie.Title} className='movie-img'/>
    //                <p><b>Type:</b> {movie.Type}</p>
    //                <p><b>Year:</b> {movie.Year}</p>
    //                <p className='imdb__link'><b>imdbID:</b>{movie.imdbID} <a href={`https://www.imdb.com/title/${movie.imdbID}`} target='blank'>View on IMDb</a>
    //               </p>
    //            </div>
    //            ))}
    //            </div>
    //            </div>  
               

    
)

  


}

export default Searchbox


//Then your form looks like:

// <form onSubmit={handleSubmit}>
//   <SearchCoinButton />
// </form>