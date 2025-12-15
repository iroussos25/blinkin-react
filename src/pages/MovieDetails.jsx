import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState} from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import blinkin from '../assets/blinkin-Photoroom.png'
import './MovieDetails.css'

const API_KEY = '279e89f2'

const MovieDetails = () => {
const { imdbID } = useParams();
const [movie, setMovie] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const navigate = useNavigate();

sessionStorage.setItem('fromBackLink', 'true')

useEffect(() => {
async function getPlot() {

try {
    const res = await fetch( 
        `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${API_KEY}`);
        const data = await res.json();
        if (data.Response === 'False') {
            throw new Error(data.Error || 'Movie not found');
        }
        setMovie(data);
}        catch (err) {
    setError(err.message);
}      finally {
    setLoading(false);
}
}
getPlot();
}, [imdbID]);
if (loading) return <div className="movies__body">Loading...</div>;
if (error) return <div className="movies__body">Error: {error}</div>;
if (!movie) return null;
 const IMDB = movie.Ratings?.find((r)=> r.Source === 'Internet Movie Database')?.Value
 const rotten = movie.Ratings?.find((r)=> r.Source === 'Rotten Tomatoes')?.Value
 const meta = movie.Ratings?.find((r) => r.Source === 'Metacritic')?.Value;
return (
<div className="movies__body">   
<main className="movies__main">
<div className="movies__container">
    <div className="row">
        <div className="movie__selected--top">
           <Link to={'/'}>
            <a href='#' className="home__link">
            <FontAwesomeIcon icon={faArrowLeft} />
               Back To Results
            </a>
           </Link>
        </div>
        <div className="movie__selected">
            <figure className="movie__selected--figure">
                <img src={movie.Poster !== 'N/A' ? movie.Poster : blinkin} alt={movie.Title} className="movie__selected--img"/>
            </figure>
            <div className="movie__selected--description">
                <h1 className="movie__selected--title">{movie.Title}</h1>
                <h2 className="movie__selected--rating-title">Critics Ratings</h2>
                <div className="critics-container">
                <h3 className="movie__selected--rating-1"><b>Rotten Tomatoes:</b><span className='red'> {rotten || 'N/A'} </span></h3> 
                <h3 className="movie__selected--rating-2"> {' || IMDb: '}<span className='red'>{IMDB || 'N/A'}</span></h3>
                <h3 className="movie__selected--rating-3"> {' || Metacritic: '} <span className='red'>{meta || 'N/A'}</span></h3>
                </div>
                
                <div className="movie__summary">
                    <h3 className="movie__summary--title">
                        Summary
                    </h3>
                    <p className="movie__summary--para">{movie.Plot}
                    </p>
                    <p className="movie__summary--director">
                        {movie.Director}
                    </p>
                    <p className="movie__summary--starring">
                        <b>Starring:</b> {movie.Actors}                                
                        </p>
                    <p className="movie__summary--rating">
                        <b>Rated:</b> {movie.Rated}
                    </p>
                    <p className="movie__summary--genre">
                        <b> Genre:</b> {movie.Genre}
                    </p>
                    <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noreferrer">View on IMDb</a>

                </div>
                
            </div>
        </div>
    </div>
</div>
</main>
</div>
)

}





export default MovieDetails
