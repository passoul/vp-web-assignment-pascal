import React from 'react'
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-container">
                    <ul className="nav-links">
                        <li>
                            <Link to="/">All Movies</Link>
                        </li>
                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>
                        <li>
                            <Link to="/add" className="btn">Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
