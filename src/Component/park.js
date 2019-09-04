import React from 'react';
import {showparkdetail} from "../Actions/actions.js"

class Park extends React.Component{
    constructor({dispatch}){
        super();
    }
    
    showdetail(){
        this.props.dispatch(showparkdetail(this.props.item));
    }

    render(){
        return (
            <div className = "parkheadline" ref = "park">    
                <a onClick = {(this.showdetail).bind(this)}>{this.props.item.Name}</a>
            </div>
        )
    }
}

export default Park;
