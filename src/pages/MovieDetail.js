import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setMovieDetailResult } from '../store/actions/movieAction';
import StarIcon from '@material-ui/icons/Star';

export default function MovieDetail() {
    const {id} = useParams();
    const dispatch = useDispatch()

    const movie = useSelector(state => state.movieReducer.movieDetailResult)

    const params = {
        'apikey': 'faf7e5bb',
        'i': id,
        'plot': 'full'
    }

    const fetchAPI = async () => {
        axios.get('https://omdbapi.com', {params})
        .then ((response) => {
            if (response.data) {
                const movie = response.data
                dispatch(setMovieDetailResult(movie))
            }

            console.log(response)

        })
        .catch ((err) => {
            console.log(err)
            //set error action here

        })

    }

    useEffect (() => {
        fetchAPI()
    }, [])

    return (
       <section className="container">
            <h1>{movie.Title}</h1>
            <div className="movie-card">
                <div className="top-section">
                    <div className="top-section__poster-container">
                        <div className="top-right-badge">{movie.Year}</div>
                        <img src={movie.Poster} alt="" />
                    </div>

                    <div className="top-section__text-container">
                        <div className="top-section__header">
                            <div className="rated">{movie.Rated}</div>
                            <div className="genre">{movie.Genre}</div>
                            <div className="rating">
                                <StarIcon fontSize="small" style={{ color: '#ffca1b', marginRight: 3}} />
                                <span>{movie.imdbRating}</span>
                            </div>
                        </div>
                        {/* <p>Released: {movie.Released}</p> */}
                        <div className="display--flex mt-4">
                            <div className="content-detail-wrapper mr-5">
                                <label>Director</label>
                                <p>{movie.Director}</p>
                            </div>                        
                            <div className="content-detail-wrapper">
                                <label>Writer</label>
                                <p>{movie.Writer}</p>
                            </div>
                        </div>
                        <div className="content-detail-wrapper">
                            <label>Actors</label>
                            <p>{movie.Actors}</p>
                        </div>
                        <div className="content-detail-wrapper">
                            <label>Awards</label>
                            <p>{movie.Awards}</p>
                        </div>
                    </div>
                </div>
                <div className="main-section mt-4">
                    <p className="plot mt-1">{movie.Plot}</p>
                </div>
            </div>

       </section>
    )
}
