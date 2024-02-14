import React, { useEffect, useState } from 'react'
import "../AdminDashboard.css"
import axios from "axios"
import { Dropdown } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

function PhotoGallery() {

    const API_URL = process.env.REACT_APP_API_URL
    const [isLoading, setIsLoading] = useState(false)

    const [userFullName, setUserFullName] = useState(null)

    return (
        <div>
            <p className="dashboard-option-title">Add photos</p>
            <form className="addmember-form" onSubmit={addMember}>
                <label className="addmember-form-label" htmlFor="userFullName">Full Name<span className="required-field">*</span></label><br />
                <input className="addmember-form-input" type="text" name="userFullName" value={userFullName} required onChange={(e) => setUserFullName(e.target.value)}></input><br />
            </form>
            <p className="dashboard-option-title">Add a Member</p>
            <div className="dashboard-title-line"></div>
        </div>
    )
}

export default PhotoGallery
