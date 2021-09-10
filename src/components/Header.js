import React from 'react';

export default function Header () {
    return (
        <header>
            <div className="header-container">
                <span className="logo">
                    OMDbMovie
                </span> 
                <div className="search-bar-container">
                    <form action="">
                        <input type="text" name="" id="" placeholder="Search title movie here..." />
                    </form>
                </div>
            </div>
        </header>
    )
}