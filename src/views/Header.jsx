import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav id="header">
            <Link to="/">Home</Link>
            <div>
                <Link to="/topscores">Meilleurs Scores</Link>
                <Link to="/about">A propos</Link>
                <Link to="/contact">Contact</Link>
            </div> 
        </nav>
    )
}

export default Header
