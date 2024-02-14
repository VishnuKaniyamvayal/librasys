import React, { useEffect, useState } from "react";
import "./PopularBooks.css";
import axios from "axios";

function PopularBooks() {

  const [ books , setBooks ] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL

  const fetchBook = async()=>{
      const response = await axios.get(API_URL + "api/books/popularbooks");
      setBooks(response.data);
  }
  
  useEffect(()=>{
      fetchBook();
  },[])
  return (
    <div className="popularbooks-container">
      <h className="popularbooks-title">Popular Books</h>
      <div className="popularbooks">
        <div className="popularbook-images">
          {
          books.map((book , index)=>(
            <img
              className="popular-book"
              src={book.bookCover}
              alt=""
              key={index}
            ></img>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default PopularBooks;
