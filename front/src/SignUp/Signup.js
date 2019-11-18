import React, { useState } from "react";
import axios from "axios";

import "./Signup.css";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    email: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        if (/^[a-zA-Z]*$/.test(value))
          setForm({
            ...form,
            [name]: value
          });
        break;
      case "username":
        if (/^[a-zA-Z0-9_-]*$/.test(value))
          setForm({
            ...form,
            [name]: value
          });
        break;
      case "password":
        setForm({
          ...form,
          [name]: value
        });
        break;
      case "email":
        setForm({
          ...form,
          [name]: value
        });
        break;
      default:
        setForm({
          ...form,
          [name]: value
        });
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    setForm({ username: "", password: "", name: "", email: "" });
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          value={form.name}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          value={form.email}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
