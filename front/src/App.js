import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import Profile from "./profile";
import Login from "./Login/Login";
import SignUp from "./SignUp/Signup";
import Products from "./Products/Products";
import AddProducts from "./addProducts";
import ProtectedRoute from "./ProtectedRoute";

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

      <ProtectedRoute exact path="/addProducts" component={AddProducts} />
    </div>
  );
}

export default App;
