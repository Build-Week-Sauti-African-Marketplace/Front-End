import React from 'react';
import logo from './logo.svg';
import './App.css';

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
        <ProtectedRoute exact path="/addProducts" component={addProducts} />
    </Router>
  </div>
)
}

export default App;
