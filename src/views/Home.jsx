import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section id="home-container">

            <div>
                <div class="wrapper">
                <h1 class="title" data-text="Paris">Paris</h1>
            </div></div>

            <p id="home">Paris is <span class="red">red</span> and blue, Paris is black and white
                <br></br> Paris is Magic, Paris is a A Moveable Feast
                <br></br> Let's party !
            </p>

            <Link id="intro-button" to="/gameselection">Let's party!</Link>
            
        </section>
    )
}

export default Home
