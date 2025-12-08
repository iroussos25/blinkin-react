import { motion } from 'framer-motion'
import React, {useEffect, useState} from 'react'
import SearchCoinButton from './SearchCoinButton'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Searchbox = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchId, setSearchId] = useState( ''); 
    
    async function fetchMovies(searchId) {
        setLoading(true)
        const {data} =
        await axios.get(`https://www.omdbapi.com/?s=${searchId}&apikey=279e89f2`);
        setMovies(data || []);
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
        
        fetchMovies();
    }, []);

    function handleSubmit(event) {
        event.preventDefault(); // stop the page refresh
        fetchMovies(searchId);
        // run your animation delay here if you want
        
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
    
)

  


}

export default Searchbox


//Then your form looks like:

// <form onSubmit={handleSubmit}>
//   <SearchCoinButton />
// </form>