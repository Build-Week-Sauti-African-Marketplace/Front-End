import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { useStyles, StyledDiv } from "./addProductsStyled";

import "./addProducts.css";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const AddProducts = props => {
  const classes = useStyles();

  console.log(localStorage.getItem("token"));
  const [addedProduct, setAddedProduct] = useState({
    location: "",
    name: "",
    description: "",
    price: "",
    currency: "",
    category: ""
    // url:""
  });
  const [categories, setCategories] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [form, setForm] = useState({});
  useEffect(() => {
    axios
      .get("https://africanmarketplace.herokuapp.com/categories", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })
      .then(res => {
        console.log(res.data);
        setCategories(res.data);
      });
    axios
      .get("https://africanmarketplace.herokuapp.com/currencies", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })
      .then(res => {
        console.log(res.data);
        setCurrencies(res.data);
      });
  }, []);
  const handleChange = e => {
    e.preventDefault();
    setAddedProduct({ ...addedProduct, [e.target.name]: e.target.value });
    console.log(addedProduct);
  };
  const handleImage = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios
      .post("https://africanmarketplace.herokuapp.com/image/upload", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        console.log(res.data.url);
        setAddedProduct({ ...addedProduct, url: res.data.url });
      })
      .catch(err => console.log(err));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (addedProduct.url === "") {
      setAddedProduct({ ...addedProduct, url: null });
    }
    axios
      .post(
        "https://africanmarketplace.herokuapp.com/items/item",
        addedProduct,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  return (
    <div className="item-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Name:</label>
        <input
          id="id"
          name="name"
          value={addedProduct.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          name="location"
          value={addedProduct.location}
          onChange={handleChange}
        ></input>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          value={addedProduct.description}
          onChange={handleChange}
        ></input>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          name="price"
          value={addedProduct.price}
          onChange={handleChange}
        ></input>
        <label htmlFOr="category">Category:</label>
        <select
          id="category"
          name="category"
          onChange={e =>
            setAddedProduct({
              ...addedProduct,
              category: { type: e.target.value }
            })
          }
          value={addedProduct.category}
        >
          {categories.map(i => (
            <option key={categories.indexOf(i)}>{i.type}</option>
          ))}
        </select>
        <label htmlFor="currency">Currency:</label>
        <select
          id="currency"
          name="currency"
          onChange={e =>
            setAddedProduct({
              ...addedProduct,
              currency: { code: e.target.value }
            })
          }
          value={addedProduct.currency}
        >
          {currencies.map(i => (
            <option key={currencies.indexOf(i)}>{i.code}</option>
          ))}
        </select>
        <label htmlFor="file">Choose File:</label>
        <input
          id="file"
          type="file"
          placeholder={"Submit Photo"}
          onChange={handleImage}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddProducts;
