import React,{useState,useEffect} from "react"
import Axios from "axios"
import { connect } from "react-redux"
import { fetchData,searchData,deleteItem } from "./actionCreators"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Item from "./item"

const Search = props => {
const [input,setInput] = useState("")


useEffect(() => {
props.fetchData()
},[])

const searchItems = e => {
    e.preventDefault()
    props.searchData(input)
    
}
const handleChange = e => {
   
    setInput(
        e.target.value
    )
}

    return (
        <form onSubmit={searchItems}>
            <ul>
            {props.data.map(i => <p key={i.itemid}> id: {i.itemid} name:{i.name}<button onClick={(e) => {
                e.preventDefault()
                props.deleteItem(i.itemid)
                }}>delete</button></p>)}
            </ul>
            <input name={input} value={input} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}


function mapStateToProps (state){
    return {
    data:state.data
    }
  }
  const mapDispatchToProps = {
  fetchData,searchData,deleteItem
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Search);