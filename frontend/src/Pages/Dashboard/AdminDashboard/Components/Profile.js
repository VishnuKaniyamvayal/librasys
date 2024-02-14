import React, { useContext } from 'react'
import { AuthContext } from '../../../../Context/AuthContext'

const Profile = () => {

    const { user } = useContext(AuthContext)
  return (
    <div style={styles.container}>
        <div style={{display:"flex" ,flexDirection:"row", justifyContent:"space-between",padding:"10px 10px ",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"gray",borderRadius:"30px"}}>
            <img style={styles.image} src={user ? user.photo : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt="N/A" />
            <div>
            <h5><span style={{fontWeight:"bold"}}>Name :</span> {user.userFullName}</h5>
            <h5><span style={{fontWeight:"bold"}}>Age :</span> {user.age}</h5>
            <h5><span style={{fontWeight:"bold"}}>Gender :</span> {user.gender}</h5>
            <h5><span style={{fontWeight:"bold"}}>Date Of Birth:</span> {user.dob}</h5>
            </div>
        </div>
        <div style={{display:"flex" ,flexDirection:"row", justifyContent:"space-between",padding:"10px 10px ",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"gray",borderRadius:"30px"}}>
            <div>
                <h5 style={styles.h4}>Contact Details</h5>
                <h5><span style={{fontWeight:"bold"}}>Email: </span>{user.email}</h5>
                <h5><span style={{fontWeight:"bold"}}>Phone:</span> {user.mobileNumber}</h5>
                <h5><span style={{fontWeight:"bold"}}>Address:</span> {user.address}</h5>
            </div>
            <div>
                <h5 style={styles.h4}>Other Details</h5>
                <h5><span style={{fontWeight:"bold"}}>Points:</span> {user.points}</h5>
            </div>
        </div>
    </div>
  )
}

const styles  = {
    container:{
        "display": "grid",
        "grid-template-columns": "auto",
        "grid-gap":"20px",
        "padding": "10px",
        "margin":"20px"
    },
    image:{
        "width": "200px",
        "height": "200px",
        "object-fit":"cover",
        "border-radius": "100px",
        "margin-bottom":"20px"
    },
    h4:{
        "font-weight" : "bold",
        "font-size": "30px",
        "margin-bottom":"10px"
    },
    h5:{
        "font-weight":"semibold"
    }
}

export default Profile