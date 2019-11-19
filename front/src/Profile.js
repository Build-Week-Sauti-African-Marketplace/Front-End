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
            localStorage.removeItem("name")
            props.history.push("/")
            console.log(res.data)})
        .catch(err => console.log(err))
        
    }
    return (
        <div>

        <button onClick={logOut}>Log out</button>
        </div>
    )
}

export default Profile 