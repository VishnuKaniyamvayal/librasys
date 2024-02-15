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

    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setSelectedImage(imageFile);
        setPreviewImage(URL.createObjectURL(imageFile));
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('image', selectedImage);
    
        try {
            const response = await axios.post(API_URL+'api/config/addimagetogallery', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
    
            if (response.status === 201) { // Check for successful upload status code
                alert('Image uploaded successfully!');
                setSelectedImage(null);
                setPreviewImage(null);
              } else {
                throw new Error(`Error uploading image: ${response.statusText}`);
              }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while uploading the image.');
          }
      }

    return (
        <div>
            <p className="dashboard-option-title">Add photos</p>
            <form className="addmember-form" onSubmit={handleSubmit}>
                <label className="addmember-form-label" htmlFor="userFullName">Select Image<span className="required-field">*</span></label><br />
                <input className="addmember-form-input" type="file" name="image" required onChange={handleImageChange}></input><br />
                <button className='addbook-submit' type="submit">Upload Image</button>
            </form>
        </div>
    )
}

export default PhotoGallery
