import React,{useEffect,useState} from "react"
import Axios from "axios"

const Item = props => {
    
    const id = props.match.params.itemid
const [itemData,setItemData] = useState({
   
})
const [edit,setEdit] = useState({
    name:"",
    description:"",
    location:"",
    price:""

})
   
    useEffect(() => {
Axios.get(`https://africanmarketplace.herokuapp.com/items/item/${id}`,{
    headers : {
        Authorization:`Bearer ${localStorage.getItem("token")}`
    }
})
.then(res => {
    setItemData(res.data)
    setEdit(res.data)
    console.log(res.data) })
.catch(err => console.log(err))
    },[])
    // console.log(itemData.category.type)
    // for some reason you cant access the properties inside objects so the other properties
    const handleChange = e => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
       
    }
const handleSubmit = e => {
    e.preventDefault()
    Axios.put(`https://africanmarketplace.herokuapp.com/items/item/${itemData.itemid}`,edit
    ,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        
       
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    props.history.push(`/profile/${localStorage.getItem("name")}`)
}
    return(
        <div>
             <form onSubmit={handleSubmit}> 
            <h1>{itemData.name}</h1> ${itemData.price}
            <p>{itemData.location}</p>
            {/* <p>{itemData.category.type}</p> */}
            <p>{itemData.description}</p>
           
    
    <input type="text" name="name" onChange={handleChange} value={edit.name}  />
    <input type="text" name="location" value={edit.location} onChange={handleChange} />
    <input  type="text" name="description" value={edit.description} onChange={handleChange} />
    <input  type="text" name="price" value={edit.price} onChange={handleChange} />
    

    <button>Submit</button>
    
        </form>

            
        </div>
    )
}
export default Item 