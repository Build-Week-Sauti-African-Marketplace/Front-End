import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";

import Login from "./Login/Login";
import SignUp from "./SignUp/Signup";

function App() {
  return (
    <div>
      <Link to="/signup"> Sign Up</Link>
      <Link to="/login"> Log In</Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/addProducts"> Add Products</Link>

      <Route exact path="/login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      {/* <Route exact path="/login" component={Login} />
         />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/addProducts" component={Products} /> */}
    </div>
  );
}

export default App;
