import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";


const Profile = props =>
{
    const logOut = e => {
        e.preventDefault()
        axios.get("https://africanmarketplace.herokuapp.com/logout",
        {
            headers: {
                Authorization:`Bearer ${localStorage.getItem("token")}`}
        })
        .then(res => {
            localStorage.removeItem("token")
            props.history.push("/")
            console.log(res.data)})
        .catch(err => console.log(err))
        
    }
    return (
        <div>
        <Link to="/profile"> Profile </Link>
        <Link to="/addProducts"> Add Products</Link>

        <button onClick={logOut}>Log out</button>
        </div>
    )
}

export default Profile 