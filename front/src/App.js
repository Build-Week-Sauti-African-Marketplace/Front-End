
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Profile from "./Profile";
import Login from "./Login/Login";
import SignUp from "./SignUp/Signup";
import Products from "./Products";
import AddProducts from "./addProducts";
import ProtectedRoute from "./ProtectedRoute";



function App() {
  return (
    <div>
      <Link to="/signup"> Sign Up</Link>
      <Link to="/login"> Log In</Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/addProducts"> Add Products</Link>

      <Route exact path="/login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/login" component={Login} />

      {/* <ProtectedRoute exact path="/profile" component={Profile} /> */}

      <ProtectedRoute exact path="/addProducts" component={AddProducts} />
    </div>
  );
}

export default App;
