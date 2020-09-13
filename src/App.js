import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {add} from './store/actions/action'


function App(props) {
  return (
    <div className="App">
      <div>{props.count}</div>
       <button onClick={props.addCount}>+</button>
    </div>
  );
}

function mapStateToProps(state){
  return {
    count : state.randomReducer.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCount : () => dispatch(add())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
