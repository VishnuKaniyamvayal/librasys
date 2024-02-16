import React, { useEffect, useState } from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from "axios"

function PhotoGallery() {

    const [ photos , setPhotos ] = useState([]);

    const API = process.env.REACT_APP_API_URL

    const fetchPhotos = async()=>{
        const response  = await axios.get("http://localhost:5000/api/config/getgallery");
        setPhotos(response.data)
    }

    useEffect(()=>{
        fetchPhotos();
        console.log(photos);
    },[])

    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                {
                photos.map(( photo , index )=>(
                    <img key={index} src={`http://localhost:5000/`+photo.ImageUrl
                } alt=''/>
                ))
                }

            </div>
        </div>
    )
}

export default PhotoGallery