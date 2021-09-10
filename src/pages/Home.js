import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setDefaultMovies } from '../store/actions/movieAction';

import ModalImage from '../components/ModalImage';

export default function Home() {
    const dispatch = useDispatch();
    const defaultMovies = useSelector(state => state.movieReducer.defaultMovies)

    const params = {
        'apikey': 'faf7e5bb',
        's': 'Harry Potter'
    }

    const fetchAPI = async () => {
        axios.get('https://omdbapi.com', {params})
        .then ((response) => {
            if (response.data.Response === 'True') {
                const movies = response.data.Search
                dispatch(setDefaultMovies(movies))
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
        <>
            <ModalImage/>

            <section className="container">
                <h1 className="mb-3">Discover Harry Potter Movies</h1>
                <div className="card-container">
                    { 
                        defaultMovies.map((movie) => {
                            return (
                                <div className="card">
                                    <div className="top-right-badge">{movie.Year}</div>
                                    <div className="card-poster-container" >
                                        <img src={movie.Poster} alt="" />
                                    </div>
                                    <Link to={`/movie/${movie.imdbID}`}>
                                        <p className="card-title">{movie.Title}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
