import axios from "axios"

export function fetchData() {
    
    return (dispatch) => {
        axios.get("https://africanmarketplace.herokuapp.com/items/useritems",
        {
            headers : {
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })

        .then(res => {
            console.log(res.data)
            dispatch({type:"FETCH_DATA_START",payload:res.data,})})
        .catch(err => console.log(err))
    }

       
}

export function searchData(input) {
    
    return (dispatch) => {
        axios.get(`https://africanmarketplace.herokuapp.com/items/useritems`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
})
.then(res => dispatch({type:"SEARCH_DATA",payload:res.data.filter(i => i.name.toUpperCase() === input.toUpperCase())}))
.catch(err => console.log(err))
    }

       
}
export function deleteItem(input) {
    
    return (dispatch) => {
        axios.delete(`https://africanmarketplace.herokuapp.com/items/item/${input}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
        
})
.then(dispatch({type:"DELETE_ITEM",payload:input}))
}

}

export function logIn() {
    
    return (dispatch) => {
        axios.get("https://africanmarketplace.herokuapp.com/items/useritems", {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => dispatch({type:"LOG_IN",payload:res.data}))
            .catch(err => console.log(err))

}
}
export function addPhoto(input){
    return(dispatch) =>{
axios.post("https://africanmarketplace.herokuapp.com/image/upload",input,
    {
        headers:{
         Authorization:`Bearer ${localStorage.getItem("token")}`,
         "Content-Type": "multipart/form-data"}
    
        
    },)
    .then(res => {
        console.log(res.data.url)
        dispatch({type:"ADD_PHOTO",payload:res.data.url})
    })
    .catch(err => console.log(err))

}
}



