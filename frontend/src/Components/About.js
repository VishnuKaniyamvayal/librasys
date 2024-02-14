import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    The library stands as a sanctuary of knowledge, a haven where the boundless worlds of literature converge to offer solace, enlightenment, and adventure. Rows upon rows of neatly arranged shelves house an array of books, each one a portal to diverse realms of imagination and information. The air within is hushed, carrying the distinct scent of aging paper and the promise of undiscovered stories. Patrons, lost in the quiet hum of turning pages, traverse the labyrinthine aisles in pursuit of wisdom, entertainment, or escape. The library's architecture, a blend of classical and contemporary design, creates an ambiance that transcends time, inviting all who enter to embark on a journey of discovery. It stands not just as a repository of books, but as a living testament to the power of human curiosity and the boundless possibilities that unfold within the pages of a well-loved book.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
