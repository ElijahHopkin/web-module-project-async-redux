import React, {useEffect} from 'react';
import './App.css';

import { fetchAllMemes, changeInput } from './action/action-creators';
import {connect} from 'react-redux'

function App(props) {
  console.log(props.input)

useEffect(() => {
  props.fetchAllMemes()
}, [])

const onSubmit = (e) => {
  e.preventDefault()
  console.log(props.input)
}

const onChange =(e) => {
  props.changeInput(e.target.value)
}

  return (
    <div className="App">
      <h1>Find Your Meme!</h1>
      <form onSubmit = {onSubmit}>
      <input 
      name='name'
      placeholder='find your meme'
      value= {props.form}
      onChange = {onChange}
      />
      <button>Search</button>
      </form>

      {props.memeReducer.memeList.map(meme => { return (<img src= {`${meme.url}`} />)})}
    </div>
  );
}
const mapStateToProps = state => {
  return{
    memeReducer: state.memeReducer,
    input: state.form.input
  }
}

export default connect (mapStateToProps, {fetchAllMemes, changeInput})(App);