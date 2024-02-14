import React, { useEffect, useState } from "react";
import "./Allbooks.css";
import axios from "axios";

function Allbooks() {

  const [books , setBooks ] = useState();

  const API_URL = process.env.REACT_APP_API_URL

  const getBooks = async () => {
    try {
        const response = await axios.get(API_URL + "api/books/allbooks")
        setBooks(response.data);
    }
    catch (err) {
        console.log(err)
    }
 }
  
  useEffect(()=>{

    getBooks();

  },[books])

  

  return (
    <div className="books-page">
      <div className="books">
        {
          books.map(( book , index )=>(
        <div className="book-card" key={index}>
          <img
            src={!book.bookCover ? "https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif": book.bookCover}
            alt="BOOK COVER"
          ></img>
          <p className="bookcard-title">{book.alternateTitle}</p>
          <p className="bookcard-author">BY: {book.author}</p>
          <div className="bookcard-category">
            <p>Auto Biography</p>
          </div>
          <div className="bookcard-emptybox"></div>
        </div>
          ))
        }
      </div>
    </div>
  );
}

export default Allbooks;
