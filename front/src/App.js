import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login/Login";
import SignUp from "./SignUp/Signup";
import Products from "./Products/Products";
import AddProducts from "./addProducts";
import ProtectedRoute from "./ProtectedRoute";
import Search from "./Search";
import Item from "./item";
import { connect } from "react-redux";
import axios from "axios";

function App(props) {
  console.log(props.data);
  const logOut = e => {
    e.preventDefault();
    axios
      .get("https://africanmarketplace.herokuapp.com/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");

        console.log(res.data);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <nav className="navbar">
        <div className="nav-list">
          <Link exact to="/">Home</Link>
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
          <Link to="/search"> Delete a product </Link>
        </div>
      </nav>
      <button onClick={logOut}>
        <Link to="/">Log Out</Link>
      </button>
      <Route exact path="/item" component={Item} />
      <Route path="/products" component={Products}></Route>
      <Route exact path="/login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/search" component={Search} />

      <Route exact path={`/profile/:username`} component={Profile} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path={`/item/:itemid`} component={Item} />
      <Route exact path="/addProducts" component={AddProducts} />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(mapStateToProps)(App);
