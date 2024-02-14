import React, { useEffect, useState } from 'react'
import './ReservedBooks.css'
import axios from 'axios';

function ReservedBooks() {

    const [books , setBooks]  = useState([]);

    const API_URL = process.env.REACT_APP_API_URL

    const fetchBooks = async ()=>{

            const response = await axios.get(API_URL + "api/transactions/booksonhold");
            setBooks(response.data);
    }

    useEffect(()=>{
        fetchBooks();
    },[])

    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                {
                books.map(( book , index )=>(
                <tr key={index}>
                    <td>{book.borrowerName}</td>
                    <td>{book.bookName}</td>
                    <td>{book.toDate}</td>
                </tr>
                ))
                }
                
    
            </table>
        </div>
    )
}

export default ReservedBooks
