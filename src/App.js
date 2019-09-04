import React from 'react';
import {fetchData} from "./Actions/actions.js";
import {connect} from "react-redux";
import LeftList from "./Component/leftlist.js";
import ItemDetail from "./Component/Itemdetail.js"

class App extends React.Component{
  constructor({dispatch}){
    super();
    dispatch(fetchData());
  }

  render(){
    return (
      <div className="App">
        <LeftList></LeftList>
        <ItemDetail></ItemDetail>
      </div>
    );
  } 
}

export default connect(
)(App)
