import React from 'react';
import  {Link, Route} from 'react-router-dom';
import './App.css';

import Login from './components/login/Login';

function App() {
 
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
}

export default App;
