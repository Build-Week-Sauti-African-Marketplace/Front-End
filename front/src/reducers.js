import axios from "axios"
import React from "react"




export const initialState = {
data:[]
}
axios.get("https://africanmarketplace.herokuapp.com/items/items")
.then(res => console.log(res.data))
.catch(err => console.log(err))
    export const reducer = (state=initialState,action ) => {
    switch(action.type){
        case "FETCH_DATA_START":
            return {
                ...state,
                data:action.payload
            }
            case "DELETE_ITEM":
                return {
                    ...state,
                    data:state.data.filter(i => i.itemid !== action.payload)
                }
            case "SEARCH_DATA":
            return {
                ...state,
                data:action.payload
            }
           

        default :
        return state
    }
    }