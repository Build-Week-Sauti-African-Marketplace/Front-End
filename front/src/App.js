import React from "react";
import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import Profile from "./profile";
=======
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from "./Profile";
>>>>>>> master
import Login from "./Login/Login";
import SignUp from "./SignUp/Signup";
import Products from "./Products/Products";
import AddProducts from "./addProducts";
import ProtectedRoute from "./ProtectedRoute";
import Search from "./Search"
import Item from "./item"
import { connect } from "react-redux"
import axios from "axios"

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-list">
          <NavLink to="/signup" activeClassName="active">
            Sign Up
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            Log In
          </NavLink>
          <NavLink to="/profile" activeClassName="active">
            Profile{" "}
          </NavLink>
          <NavLink to="/products" activeClassName="active">
            Product{" "}
          </NavLink>
          <NavLink to="/addProducts" activeClassName="active">
            Add Products
          </NavLink>
        </div>
      </nav>
      <Route exact path="/login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/products" component={Products} />
      {/* <ProtectedRoute exact path="/profile" component={Profile} /> */}

function App(props) {
  console.log(props.data)
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
        
        console.log(res.data)})
    .catch(err => console.log(err))
    
}
  return (
    <div>

      <Link to="/">Home</Link>
      <Link to="/signup"> Sign Up</Link>
      <Link to="/login"> Log In</Link>
     <Link to={`/profile/:username`}>Profile</Link>
     <Link to="/addProducts"> Add a product</Link>
     <Link to="/search"> Delete a product </Link>
     <button onClick={logOut}><Link to="/">Log Out</Link></button>
     <Route exact path="/item" component={Item} />


      <Route exact path="/login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <ProtectedRoute exact path="/search" component={Search} />
     

      

      <ProtectedRoute exact path={`/profile/:username`} component={Profile} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute exact path={`/item/:itemid`} component={Item} />
      <ProtectedRoute exact path="/addProducts" component={AddProducts} />
    </div>
  );
}
function mapStateToProps (state){
  return {
  data:state.data
  }
}


export default connect(mapStateToProps) (App);

