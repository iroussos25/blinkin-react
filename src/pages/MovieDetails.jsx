import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import blinkin from '../assets/blinkin-Photoroom.png'
import './MovieDetails.css'

const MovieDetails = () => {
  return (
    <div className="movies__body">   
        <main className="movies__main">
            <div className="movies__container">
                <div className="row">
                    <div className="movie__selected--top">
                        <Link to="/" className="home__link">
                            <FontAwesomeIcon icon="arrow-left" />
                        </Link>   
                        {/* <Link to="/books" className="book__link">
                        <h2 className="book__selected--title--top">
                            Books</h2>
                        </Link>   */}
                    </div>
                    <div className="movie__selected">
                        <figure className="movie__selected--figure">
                            <img src={blinkin} alt="" className="movie__selected--img"/>
                        </figure>
                        <div className="movie__selected--description">
                            <h2 className="movie__selected--title">Title</h2>
                            <h2 className="movie__selected--rating">Rating</h2>
                            
                            <div className="movie__summary">
                                <h3 className="movie__summary--title">
                                    Summary
                                </h3>
                                <p className="movie__summary--para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corrupti nulla voluptatum corporis eum qui minus, odio repudiandae rerum quae.
                                </p>
                                <p className="movie__summary--director">
                                    Director
                                </p>
                                <p className="movie__summary--starring">
                                  Starring                                
                                  </p>
                                <p className="movie__summary--rating">
                                    Rating
                                </p>
                                <p className="movie__summary--genre">
                                    Genre
                                </p>

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
