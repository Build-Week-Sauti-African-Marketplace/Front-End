import React from "react"
import Axios from "axios"

const Search = props => {
const [searchName,setSearchName] = useState({})
const searchItems = e => {
    e
    Axios.get(`https://africanmarketplace.herokuapp.com/items/itemname/${searchName}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
})
.then(res => setSearchName(res.data))
.catch(err => console.log(err))
}
const handleChange = e => {
    
}
    return (
        <form>
            <input name={searchName} value={searchName}/>
        </form>
    )
}