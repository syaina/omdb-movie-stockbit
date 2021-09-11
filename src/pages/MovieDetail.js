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
    }, [dispatch])

    return (
       <section className="container">
            <h1 className="mb-3">{movie.Title}</h1>
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
                        </div>
                        <div className="display--flex align-items--center my-4">
                            <div className="rating mr-3">
                                <div className="display--flex align-items--center">
                                    <StarIcon fontSize="small" style={{ color: '#ffca1b', marginRight: 3}} />
                                    <span>{movie.imdbRating}</span>
                                </div>
                                <div className="rating-source">IMDB Rating</div>
                            </div>
                            <div className="rating mr-3">
                                <div className="display--flex align-items--center">
                                    <div className="margin--auto">{movie.Metascore}</div>
                                </div>
                                <div className="rating-source">Metascore</div>
                            </div>
                            <div className="rating">
                                <div className="display--flex align-items--center">
                                    <div className="margin--auto">{movie.imdbVotes}</div>
                                </div>
                                <div className="rating-source">IMDB Votes</div>
                            </div>
                        </div>
                        {/* <p>Released: {movie.Released}</p> */}
                        <div className="display--flex">
                            <div className="content-detail-wrapper mr-3">
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
                    <div>
                        <p className="font-color--yellow font-weight--bold">Sinopsis</p>
                        <hr className="divider" />
                        <p className="plot mt-1">{movie.Plot}</p>
                    </div>
                    <div>
                        <div className="display--flex">
                            <div className="content-detail-wrapper mr-3">
                                <label>Runtime</label>
                                <p>{movie.Runtime}</p>
                            </div> 
                            <div className="content-detail-wrapper mr-3">
                                <label>Released</label>
                                <p>{movie.Released}</p>
                            </div> 
                            <div className="content-detail-wrapper">
                                <label>Box Office</label>
                                <p>{movie.BoxOffice}</p>
                            </div>
                        </div>
                        <div className="display--flex">
                            <div className="content-detail-wrapper mr-3">
                                <label>Language</label>
                                <p>{movie.Language}</p>
                            </div> 
                            <div className="content-detail-wrapper">
                                <label>Country</label>
                                <p>{movie.Country}</p>
                            </div> 
                        </div>
                        <div className="content-detail-wrapper">
                            <label>Production</label>
                            <p>{movie.Production}</p>
                        </div> 
                    </div>
                </div>
            </div>

       </section>
    )
}
