import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux"
import { logIn } from "./actionCreators"
import { ProfileCon, MoveCon,  StyledH1, ItemsDiv, ItemsBoxes} from './ProfileStyles';

const Profile = props => {
    useEffect(() => {
props.logIn()

    }, [])
    return (
        <ProfileCon>
            <MoveCon>
                < StyledH1>{`Welcome Back ${localStorage.getItem("name")}`}</ StyledH1>
                <ItemsDiv>
                    {props.data.map(i => <ItemsBoxes key={i.itemid}>{<Link to={`/item/${i.itemid}`}>{i.name}</Link>}</ItemsBoxes>)}
                </ItemsDiv>
            </MoveCon>
        </ProfileCon>
        
    )
}
function mapStateToProps (state){
    return {
    data:state.data,
    
    }
  }
  const mapDispatchToProps = {
 logIn
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Profile);