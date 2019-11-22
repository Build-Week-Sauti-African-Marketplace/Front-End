import React from "react";
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
import axios from "axios";

function App() {
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
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <Router>
      <nav className="navbar">
        <div className="nav-list">
          <NavLink exact to="/" activeClassName="active">
            Home{" "}
          </NavLink>
          <NavLink to="/signup" activeClassName="active">
            Sign Up
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            Log In
          </NavLink>
          <NavLink to="/profile" activeClassName="active">
            Profile{" "}
          </NavLink>
          <NavLink to="/addProducts" activeClassName="active">
            Add Products
          </NavLink>
          <Link to="/delete"> Delete a product </Link>
          <button onClick={logOut}>
            <Link to="/">Log Out</Link>
          </button>
        </div>
      </nav>
      <Route exact path="/item" component={Item} />
      <Route exact path="/" component={Products}></Route>
      <Route exact path="/login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <ProtectedRoute exact path="/delete" component={Search} />

      <ProtectedRoute exact path={`/profile/:username`} component={Profile} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute exact path={`/item/:itemid`} component={Item} />
      <ProtectedRoute exact path="/addProducts" component={AddProducts} />
      </Router>
    </div>
  );
}


export default App;
