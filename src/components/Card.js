import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setModal } from '../store/actions/modalAction';

export default function Card (props) {
    const dispatch = useDispatch()

    const handlePosterClick = (url) => {
        dispatch(setModal({isModal: true, poster: url}))
    }
    
    return (
        <div className="card">
            <div className="top-right-badge">{props.Year}</div>
            <div className="card-poster-container" >
                <img src={props.Poster} alt="" onClick={() => handlePosterClick(props.Poster)} />
            </div>
            <Link to={`/movie/${props.imdbID}`}>
                <p className="card-title">{props.Title}</p>
            </Link>
        </div>
    )
}
