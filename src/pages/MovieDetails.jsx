import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/fontawesome-free'
import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import blinkin from '../assets/blinkin-Photoroom.png'
import './MovieDetails.css'

const API_KEY = '279e89f2'

const MovieDetails = () => {
const { imdbID } = useParams();
const [movie, setMovie] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
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
if (error) return <div className="movies__body">Error: {error}</div>
if (!movie) return null;
return (
<div className="movies__body">   
<main className="movies__main">
<div className="movies__container">
    <div className="row">
        <div className="movie__selected--top">
            <Link to="/" className="home__link">
            <FontAwesomeIcon icon={faArrowLeft} />
               Back To Results
            </Link>
        </div>
        <div className="movie__selected">
            <figure className="movie__selected--figure">
                <img src={movie.Poster !== 'N/A' ? movie.Poster : blinkin} alt={movie.Title} className="movie__selected--img"/>
            </figure>
            <div className="movie__selected--description">
                <h2 className="movie__selected--title">{movie.Title}</h2>
                <h2 className="movie__selected--rating">{movie.imdbRating}</h2>
                
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
