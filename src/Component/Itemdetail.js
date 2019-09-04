import React from 'react';
import {connect} from "react-redux";
import $ from "jquery";

class Itemdetail extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return (
            <div className = "itemdetail" ref = "detail"> 
                <p>Name:{this.props.current.Name}</p>
                <p>Location:{this.props.current.Location}</p>
                <p>Established:{this.props.current.Established}</p>
                <p>Area:{this.props.current.Area}</p>
                <p>Recreation visitors:a{this.props.current["Recreation visitors"]}</p>
                <p>Description:{this.props.current.Description}</p>
                <img src={this.props.current.Image} className = "img"></img>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return{
            current:state.current
        }
    }
)(Itemdetail);
