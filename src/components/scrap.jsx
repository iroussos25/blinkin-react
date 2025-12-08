import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Scrap = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState(true);
    const [loading, setLoading] = useState(false);
    const [searchId, setSearchId] = useState(id || '');

    async function fetchMovies(userId) {
        setLoading(true)
        const {data} =
        await axios.get(`http://www.omdbapi.com/?s=${searchId}&apikey=279e89f2`);
        setMovies(data);
        setLoading(false);
        console.log(data);
    }

    function onSearch() {
        fetchMovies(searchId)
    }
    function onSearchKeyPress(key) {
        if (key === 'Enter') {
            onSearch();
        }
    }
    useEffect(() => {

        fetchMovies();
    }, []);

  return (
    <>
    <div className="movie-card">
          <label className="movie__search--label">Search by Id</label>
      <input
        type="number" value={searchId} onChange={(event) => setSearchId(event.target.value)} onKeyPress={(event) => onSearchKeyPress(event.key)}
      />
      <button onClick={() => onSearch()}>Enter</button> 
     </div>

     {
    loading 
    ? new Array(10).fill(0).map((_, index) => (
        <div className="movie" key={index}>
    <div className="movie__title">
      <div className="movie__title--skeleton"></div>
    </div>
    <div className="movie__body">
      <p className="movie__body--skeleton"></p>
    </div>
  </div>
    )): (

         movies.map((movie)=>(
      <div className="movie" key={movie.id}>
    <div className="post__title">{movie.title}</div>
    <p className="post__body">{movie.body}</p>
  </div>
      ))
    )
  }
    {/* <div className='movie__search'>
      <Link to={'/'}>
      <button>Back</button>
        </Link>
      <div className="container">
    <div className="row">
        <div className="movie-list">
            <div className="movie">
                <div className="movie-card__container">
                    <div className="movie-card">
                    <div class="movie-card">
                        <h3><b>Title:</b> Title </h3>
                        <p><b>Type:</b> Movie</p>
                        <p className="imdb__link"><b>ImdbID</b></p>
                      
                      <img src="" alt="" />
                    </div>
                 </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* </div>
    </div> */}
     </>
  )
}

export default Scrap
