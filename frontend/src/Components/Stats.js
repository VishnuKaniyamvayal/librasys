import React, { useEffect, useState } from 'react'
import './Stats.css'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import BookIcon from '@material-ui/icons/Book';
import axios from 'axios';

function Stats() {

    const [ totalMembers , setTotalMembers ] = useState(); 
    const [ totalBooks , setTotalBooks ] = useState(); 
    const [ totalReservations , setTotalReservations ] = useState(); 

    const API_URL = process.env.REACT_APP_API_URL

    const fetchDetails = async() => {
        const members = await axios.get(API_URL + "api/users/allmembers");
        setTotalMembers(members.data.length);
        const books = await axios.get(API_URL + "api/books/allbooks");
        setTotalBooks(books.data.length);
        const reservations = await axios.get(API_URL + "api/transactions/all-transactions");
        setTotalReservations(reservations.data.length);
    }

    useEffect(()=>{
        fetchDetails();
    },[])



    return (
        <div className='stats'>
            <div className='stats-block'>
                <LibraryBooksIcon className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Total Books</p>
                <p className='stats-count'>{totalBooks}</p>
            </div>
            <div className='stats-block'>
                <LocalLibraryIcon className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Total Members</p>
                <p className='stats-count'>{totalMembers}</p>
            </div>
            <div className='stats-block'>
                <BookIcon className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Reservations</p>
                <p className='stats-count'>{totalReservations}</p>
            </div>
        </div>
    )
}

export default Stats