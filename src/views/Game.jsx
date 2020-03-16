import React, {  useState, useEffect, StrictMode } from 'react'
import IntroMap from "../components/IntroMap"
import MapGame from "../components/MapGame"

const Game = (props) => {

    const [game, setGame] = useState({
        "mode": props.location.state.mode
    })

    useEffect(() => {
        if (game.mode == "maps") {
            setGame({
                "plan": ["introMap", "map", "map", "map", "map"],
                "step": 0,
                "current": "introMap"
            })
        }
    },[])

    function handleNext() {
        var step = game.step + 1
        var current = game.plan[step]
        setGame({
            "step": step,
            "current": current
        })
    }

    return (
        <div>
            {game.current==="introMap" && <IntroMap next={handleNext} />}
            {game.current==="map" && <MapGame next={handleNext} />}

            
        </div>
    )
}

export default Game
