import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import Profile from "./profile"
import SignUp from "./Signup"
import Login from "./Login"
import Products from "./Products"
import AddProducts from "./addProducts"
import ProtectedRoute from "./ProtectedRoute"
function App() {
 
return (
  <div>
    <Router>
      <Link to="/Signup"> Sign Up</Link>
      <Link to="/Login"> Log In</Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/addProducts"> Add Products</Link>

        <Route exact path="/login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/addProducts" component={AddProducts} />
    </Router>
  </div>
)
}

export default App;
