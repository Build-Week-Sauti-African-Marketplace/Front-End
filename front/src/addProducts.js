import React, { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { useStyles, StyledDiv } from './addProductsStyled'


import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const AddProducts = props => {
    const classes = useStyles();

    console.log(localStorage.getItem("token"))
    const [addedProduct, setAddedProduct] = useState({
        location: "",
        name: "",
        description: "",
        price: "",
        currency: "",
        category: ""
    })
    const [categories, setCategories] = useState([])
    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        axios.get("https://africanmarketplace.herokuapp.com/categories", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
            .then(res => {
                console.log(res.data)
                setCategories(res.data)
            })
        axios.get("https://africanmarketplace.herokuapp.com/currencies", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
            .then(res => {
                console.log(res.data)
                setCurrencies(res.data)
            })
    }, [])
    const handleChange = e => {
        e.preventDefault()
        setAddedProduct({ ...addedProduct, [e.target.name]: e.target.value })
        console.log(addedProduct)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("https://africanmarketplace.herokuapp.com/items/item", addedProduct, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (

        <form onSubmit={handleSubmit} className={classes.container}>
            <StyledDiv>
                <TextField
                    className={classes.textField}
                    label='name'
                    variant="outlined"
                    placeholder="name"
                    name="name"
                    value={addedProduct.name}
                    onChange={handleChange}>
                </TextField>
                <TextField
                    className={classes.textField}
                    label='location'
                    variant="outlined"
                    placeholder="location"
                    name="location"
                    value={addedProduct.location}
                    onChange={handleChange}>
                </TextField>
                <TextField
                    className={classes.textField}
                    label='description'
                    multiline
                    rows='4'
                    variant="outlined"
                    placeholder="description"
                    name="description" value={addedProduct.description}
                    onChange={handleChange}>
                </TextField>
                <TextField
                    className={classes.textField}
                    label='price'
                    variant="outlined"
                    placeholder="price"
                    name="price"
                    value={addedProduct.price}
                    onChange={handleChange}>
                </TextField>
                <Select
                    className={classes.textField}
                    placeholder="category"
                    name="category"
                    onChange={(e) =>
                        setAddedProduct(
                            { ...addedProduct, category: { type: e.target.value } }
                        )}
                    value={addedProduct.categories}
                >
                    {categories.map(i =>
                        <MenuItem key={categories.indexOf(i)}>{i.type}</MenuItem>
                    )}
                </Select>
                <Select
                    className={classes.textField}
                    placeholder="category"
                    name="currency" onChange={(e) =>
                        setAddedProduct({ ...addedProduct, currency: { code: e.target.value } }
                        )}
                    value={addedProduct.currencies}
                >
                    {currencies.map(i =>
                        <MenuItem key={currencies.indexOf(i)}>{i.code}</MenuItem>
                    )}
                </Select>
                <Button className={classes.button}>Submit</Button>
            </StyledDiv>
        </form>
    )}
export default AddProducts

//     <form onSubmit={handleSubmit}> 
        
    // <input placeholder="name" name="name" value={addedProduct.name} onChange={handleChange}></input>
    // <input placeholder="location" name="location" value={addedProduct.location} onChange={handleChange}></input>
    // <input placeholder="description" name="description" value={addedProduct.description} onChange={handleChange}></input>
    // <input placeholder="price" name="price" value={addedProduct.price} onChange={handleChange}></input>
    // <select placeholder="category" name="category" onChange={(e) => setAddedProduct({...addedProduct,category:{type:e.target.value}})} value={addedProduct.category}>
    //   {categories.map(i => <option key={categories.indexOf(i)}>{i.type}</option>)}
    //    </select>
    //    <select placeholder="category" name="currency" onChange={(e) => setAddedProduct({...addedProduct,currency:{code:e.target.value}})} value={addedProduct.currency}>
    //   {currencies.map(i => <option key={currencies.indexOf(i)}>{i.code}</option>)}
    //    </select>
    // <button>Submit</button>