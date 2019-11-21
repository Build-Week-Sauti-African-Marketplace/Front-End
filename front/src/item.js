import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from 'styled-components'
import "./item.css";

const Img = styled.img`
height:50%;
width:70%
`
const Item = props => {
  const id = props.match.params.itemid;
  const [itemData, setItemData] = useState({});
  const [edit, setEdit] = useState({
    name: "",
    description: "",
    location: "",
    price: "",
    url:""
  });
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    Axios.get(`https://africanmarketplace.herokuapp.com/items/item/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        setItemData(res.data);
        setEdit(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  // console.log(itemData.category.type)
  // for some reason you cant access the properties inside objects so the other properties
  const handleChange = e => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value
    });
  };
  const handleImage = e => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("file", e.target.files[0])
    Axios.post("https://africanmarketplace.herokuapp.com/image/upload",formData,
    {
        headers:{
         Authorization:`Bearer ${localStorage.getItem("token")}`,
         "Content-Type": "multipart/form-data"}
    
        
    },)
    .then(res => {
        console.log(res.data.url)
    setEdit({...edit,url:res.data.url})
    })
    .catch(err => console.log(err))
}
  const handleSubmit = e => {
    e.preventDefault();
    if (edit.url === ""){
      setEdit({
        ...edit,
        url:null
      })
    }
    else if(itemData.url !== null){
      setEdit({
        ...edit,
        url:itemData.url
      })
    }
    Axios.put(
      `https://africanmarketplace.herokuapp.com/items/item/${itemData.itemid}`,
      edit,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    props.history.push(`/profile/${localStorage.getItem("name")}`);
  };

  const toggleEdit = e => {
      setIsEditing(prev=> !prev);
  };

  return (
    <div className="item-container">
      <form onSubmit={handleSubmit}>
        {isEditing ? (
          <>
            {" "}
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={edit.name}
            />
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              id="location"
              value={edit.location}
              onChange={handleChange}
            />
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              type="text"
              name="description"
              value={edit.description}
              onChange={handleChange}
            />
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="text"
              name="price"
              value={edit.price}
              onChange={handleChange}
            />
             <label htmlFor="price">Image:</label>
            <input
              id="price"
              type="file"
              onChange={handleImage}
            />
            <button>Submit</button>{" "}
          </>
        ) : (
          <>
            {" "}
            <h1>{itemData.name}</h1>
            <p>Price: ${itemData.price}</p>
            <p>Location: {itemData.location}</p>
            <Img src={itemData.url} />
            <p>Description: {itemData.description}</p>
          </>
        )}
        <button type="button" onClick={toggleEdit}>
          {isEditing ? "Back" : "Edit"}
        </button>
      </form>
    </div>
  );
};
export default Item;
