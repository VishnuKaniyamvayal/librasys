import React from 'react'
import './RecentAddedBooks.css'
import { useEffect, useState } from 'react'
import axios from 'axios';

function RecentAddedBooks() {

    const [ books , setBooks ] = useState([]);

    const API_URL = process.env.REACT_APP_API_URL

    const fetchBook = async()=>{
        const response = await axios.get(API_URL + "api/books/recentupload");
        setBooks(response.data);
    }
    
    useEffect(()=>{
        fetchBook();
    },[])

    return (
        <div className='recentaddedbooks-container'>
            <h className='recentbooks-title'>Recent Uploads</h>
            <div className='recentbooks'>
                <div className='images'>
                    {
                        books.map(( book , index )=>(
                            <img key={index} className='recent-book' src={book.bookCover} alt=''></img>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentAddedBooks