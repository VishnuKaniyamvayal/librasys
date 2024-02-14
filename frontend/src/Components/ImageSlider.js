import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {


    

    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://bestofforever.com/wp-content/uploads/Quotes-By-Famous-Personalities-On-Life.jpg"
                        alt="Albert Einstein"
                    />
                    <Carousel.Caption>
                        <h3>Albert Einstein</h3>
                        <p>Albert Einstein was a German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://e1.pxfuel.com/desktop-wallpaper/787/113/desktop-wallpaper-great-quotes-group-famous-people-thumbnail.jpg"
                        alt="Mahatma Gandhi"
                    />
                    <Carousel.Caption>
                        <h3>Mahatma Gandhi</h3>
                        <p>Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist and political ethicist</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://e0.pxfuel.com/wallpapers/80/370/desktop-wallpaper-steve-inspirational-quotes-by-famous-people-success-jobs-world-famous-celebrities.jpg"
                        alt="Steve Jobs"
                    />
                    <Carousel.Caption>
                        <h3>Steve Jobs</h3>
                        <p>Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American businessman, inventor, and investor best known for co-founding the technology giant Apple Inc.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
