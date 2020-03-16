import React from 'react'

const IntroMap = ({next}) => {
    return (
        <div>
           <h1>IntroMap</h1> 
           <button onClick={() => next()}>Next</button>
        </div>
    )
}

export default IntroMap
