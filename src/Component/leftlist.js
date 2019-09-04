import React from 'react';
import {connect} from "react-redux";
import $ from "jquery";
import Park from "./park.js";

class LeftList extends React.Component{
    constructor(){
        super();
    }
    
    showlist(){
        var lis = [];
        this.props.data.forEach(element => {
            lis.push(<li><Park item = {element} dispatch={this.props.dispatch}></Park></li>);
        });
        return lis;
    }

    render(){
        return (
            <div className = "leftlist" ref = "list">    
                <ul className = "ul">
                    {this.showlist()}
                </ul>
            </div>

        )
    }
}

export default connect(
    (state)=>{
        return{
            data:state.data
        }
    }
)(LeftList);
