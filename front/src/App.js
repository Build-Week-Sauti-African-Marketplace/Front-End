<<<<<<< HEAD
import React from 'react';
import  {Link, Route} from 'react-router-dom';
import './App.css';
=======
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from "./profile";
import Login from "./Login/Login";
import SignUp from "./SignUp/Signup";
import Products from "./Products";
import AddProducts from "./addProducts";
import ProtectedRoute from "./ProtectedRoute";
>>>>>>> 52f280eb57a35d9f65a0ce48d40a21024409ac27

import Login from './components/login/login.css/Login';

function App() {
<<<<<<< HEAD
 
return (
    <div>
        <Link to="/Signup"> Sign Up</Link>
        <Link to="/Login"> Log In</Link>
        <Link to="/profile"> Profile </Link>
        <Link to="/addProducts"> Add Products</Link>

          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/SignUp" component={SignUp} /> */}
          {/* <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/addProducts" component={addProducts} /> */}
    </div>
  )
=======
  return (
    <div>
      <Link to="/signup"> Sign Up</Link>
      <Link to="/login"> Log In</Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/addProducts"> Add Products</Link>

      <Route exact path="/login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/login" component={Login} />

      <ProtectedRoute exact path="/profile" component={Profile} />

      <ProtectedRoute exact path="/addProducts" component={AddProducts} />
    </div>
  );
>>>>>>> 52f280eb57a35d9f65a0ce48d40a21024409ac27
}

export default App;
