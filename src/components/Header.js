import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setKeyword } from '../store/actions/movieAction'

export default function Header () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [input, setInput] = useState();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(setKeyword(input))
        history.push(`/search/${input}`)
    }

    return (
        <header>
            <div className="header-container">
                <Link to="/" className="logo">
                    OMDbMovie
                </Link>
                <div className="search-bar-container">
                    <form onSubmit={(e) => handleOnSubmit(e)}>
                        <input 
                            type="text" 
                            name="keyword" 
                            id="keyword" 
                            placeholder="Search movie title here..."
                            onChange={(e) => setInput(e.target.value)} />
                    </form>
                </div>
            </div>
        </header>
    )
}