import { motion } from 'framer-motion'
import React, {useEffect, useState} from 'react'
import SearchCoinButton from './SearchCoinButton'
import axios from 'axios';
import { data, useParams } from 'react-router-dom';
import MovieCard from './MovieCard';
 

const Searchbox = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchId, setSearchId] = useState(''); 
    
    async function fetchMovies(searchId) {
        setLoading(true);
        const { data } =
        await axios.get(`https://www.omdbapi.com/?s=${searchId}&apikey=279e89f2`);
        setMovies(data);
        sessionStorage.setItem('lastSearchResults', JSON.stringify(data));
        sessionStorage.setItem('lastSearchId', searchId);
        setLoading(false);
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
    const fromBack = sessionStorage.getItem('fromBackLink');
    const savedResults = sessionStorage.getItem('lastSearchResults');
    const savedId = sessionStorage.getItem('lastSearchId');
    if (fromBack && savedResults && savedId) {
        setMovies(JSON.parse(savedResults));
        setSearchId(savedId);
        sessionStorage.removeItem('fromBackLink');
    } else {
    setMovies([]);
    setSearchId('');
    }
    
        
    }, []);
    const getPoster = url => (url && url !== 'N/A' ? url : '/img/no_image.png');
    
      
    return (
        
        <>
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
 <div className='movie-list'>

     {movies?.Search?.map((movie) => <MovieCard key={movie.imdbID} movie={movie}/>)}
 </div>

     </>

   
        
    ) 
    
    
    function handleSubmit(event) {
        event.preventDefault(); 
        if (!searchId){
        alert('Please enter a search term');
        return;

        }
         fetchMovies(searchId);
          
    }  
 

               

    


  


}

export default Searchbox


