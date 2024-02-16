import React, { useEffect, useState } from 'react'
import './Footer.css'
import axios from "axios"

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    
    const [ librarian , setLibrarian ] = useState();

    const API_URL = process.env.REACT_APP_API_URL

  const fetchData = async()=>{
      const response = await axios.get("http://localhost:5000/api/config/footerdetails");
      setLibrarian(response.data[0]);
  }

  useEffect(()=>{
    fetchData();
  },[])
    
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>{librarian.email}</p>
                        <p>{librarian.mobileNumber}</p>
                        <p>{librarian.address}</p>
                        <p>India</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Usefull Links</h1>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>{librarian.userFullName}</p>
                        <p>{librarian.email}</p>
                        <p>{librarian.mobileNumber}</p>
                    </div>
                </div>
                <div className="contact-social" >
                </div>
            </div>
        </div>
    )
}

export default Footer