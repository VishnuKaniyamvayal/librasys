import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {


    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src={`http://localhost:5000/`} alt=''/>

            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery