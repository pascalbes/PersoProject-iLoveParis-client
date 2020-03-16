import React from 'react'
import { Link } from 'react-router-dom'

const GameSelection = () => {
    return (
        <div>
            <h1>Sélection du jeu</h1>
            <Link to={{pathname: "/game",state: {mode: "maps"}}}>Maps Game</Link>
            <Link to={{pathname: "/game",state: {mode: "pics"}}}>Pics Game</Link>
            <Link to={{pathname: "/game",state: {mode: "music"}}}>Music Game</Link>
            <Link to={{pathname: "/game",state: {mode: "master"}}}>Master Game</Link>
        </div>
    )
}

export default GameSelection
