import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux"
import { fetchData,searchData,deleteItem,logIn } from "./actionCreators"

import { ProfileCon, MoveCon,  StyledH1, ItemsDiv, ItemsBoxes} from './ProfileStyles';

const Profile = props => {
    const [products, setProducts] = useState([])
    // const logOut = e => {
    //     e.preventDefault()
    //     axios.get("https://africanmarketplace.herokuapp.com/logout",
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`
    //             }
    //         })
    //         .then(res => {
    //             localStorage.removeItem("token")
    //             localStorage.removeItem("name")
    //             props.history.push("/")
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err))

    // }
    useEffect(() => {
props.logIn()

    }, [])
console.log(props.data)

    return (
        <ProfileCon>
            <MoveCon>
                < StyledH1>{`Welcome Back ${localStorage.getItem("name")}`}</ StyledH1>
                <ItemsDiv>
                    {props.data.map(i => <ItemsBoxes key={i.itemid}>{<Link to={`/item/${i.itemid}`}>{i.name}</Link>}</ItemsBoxes>)}
                </ItemsDiv>
            </MoveCon>
        </ProfileCon>
        
    )
}
function mapStateToProps (state){
    return {
    data:state.data,
    
    }
  }
  const mapDispatchToProps = {
 logIn
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Profile);