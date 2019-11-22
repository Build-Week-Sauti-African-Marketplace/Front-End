import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
   
    e.preventDefault()
setForm({...form,[e.target.name]:e.target.value})
   console.log(form)
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    axios.post("https://africanmarketplace.herokuapp.com/createnewuser",form)
.then(res => console.log(res.data))
.catch(err => console.log(err))
    setForm({ username: "", password: ""});

  };

  return (
    <div className="signup">
      <form className="signup-form" onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          required
          onChange={handleChange}
          placeholder="Username"
          value={form.username}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          minLength="8"
          onChange={handleChange}
          name="password"
          placeholder="Password"
          value={form.password}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
