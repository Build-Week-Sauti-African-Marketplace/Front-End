import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import { ProfileCon, MoveCon,  StyledH1, ItemsDiv, ItemsBoxes} from './ProfileStyles';

const Profile = props => {
    const [products, setProducts] = useState([])
    const logOut = e => {
        e.preventDefault()
        axios.get("https://africanmarketplace.herokuapp.com/logout",
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(res => {
                localStorage.removeItem("token")
                localStorage.removeItem("name")
                props.history.push("/")
                console.log(res.data)
            })
            .catch(err => console.log(err))

    }
    useEffect(() => {
        axios.get("https://africanmarketplace.herokuapp.com/items/useritems", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }, [])
            .then(res => setProducts(res.data))

    }, [])


    return (
        <ProfileCon>
            <MoveCon>
                < StyledH1>{`Welcome Back ${localStorage.getItem("name")}`}</ StyledH1>
                <ItemsDiv>
                    {products.map(i => <ItemsBoxes key={i.itemid}>{<Link to={`/item/${i.itemid}`}>{i.name}</Link>}</ItemsBoxes>)}
                </ItemsDiv>
            </MoveCon>
        </ProfileCon>
    )
}

export default Profile 