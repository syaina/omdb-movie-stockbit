import React, { useEffect, useState } from 'react';

import {Link, useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import ModalImage from '../components/ModalImage'
import Card from '../components/Card'
import { setMovieResult } from '../store/actions/movieAction';


export default function SearchResult() {
    // const keyword = useSelector(state => state.movieReducer.keyword);
    const movieResult = useSelector(state => state.movieReducer.movieResult)
    const dispatch = useDispatch()

    const {keyword} = useParams();

    const [errorMessage, setErrorMessage] = useState(false);
    
    const params = {
        'apikey': 'faf7e5bb',
        's': keyword
    }

    const fetchAPI = async () => {
        axios.get('https://omdbapi.com', {params})
        .then ((response) => {
            if (response.data.Response === 'True') {
                setErrorMessage(false)
                const movies = response.data.Search
                dispatch(setMovieResult(movies))
            }
        })
        .catch ((err) => {
            console.log(err)
            setErrorMessage("Can not find the movie, try another keyword")
            dispatch(setMovieResult([]))
        })

    }

    useEffect (() => {
        fetchAPI()
    }, [keyword])

    
    return (
        <div>
            <ModalImage/>

            <section className="container">
                <h1 className="mb-3">Result for {keyword} movies...</h1>
                {
                    errorMessage ? <p>{errorMessage}</p> : null
                }
                <div className="card-container">
                    { 
                        movieResult.map((movie) => {
                            return (
                                <Card
                                    Title={movie.Title}
                                    Poster={movie.Poster}
                                    Year={movie.Year}
                                    imdbID={movie.imdbID}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
