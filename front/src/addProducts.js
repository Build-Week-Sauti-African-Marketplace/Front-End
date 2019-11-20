import React, { useState, useEffect } from "react"
import axios from "axios"

import { useStyles, StyledDiv } from './addProductsStyled'


import TextField from '@material-ui/core/TextField';
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
                <TextField
                    className={classes.textField}
                    select
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
                </TextField>
                <TextField 
                    className={classes.textField}
                    select
                    placeholder="category"
                    name="currency" onChange={(e) =>
                        setAddedProduct({ ...addedProduct, currency: { code: e.target.value } }
                        )}
                    value={addedProduct.currencies}
                >
                    {currencies.map(i =>
                        <MenuItem key={currencies.indexOf(i)}>{i.code}</MenuItem>
                    )}
                </TextField>
                <Button className={classes.button}>Submit</Button>
            </StyledDiv>
        </form>)
}
export default AddProducts