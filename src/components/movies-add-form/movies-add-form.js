import { Component, useState } from "react";

import "./movies-add-form.css"

const MovieAddForm = ({addForm}) => {
  const [state, setState] = useState( {name: "", viewers: ""} )
  
  const changeHandlerInput = e => {
    setState( { ...state, [e.target.name]: e.target.value } )
  }

  const addFormHandler = e => {
    e.preventDefault();
    if(state.name === '' || state.viewers === '') return
    const data = { name: state.name, viewers: state.viewers}
    addForm(data)
    setState({name: '', viewers: ''})
  }

  return (
    <div className="movies-add-form">
        <h3>Yangi Kino Qo'shish</h3>
        <form className="add-form d-flex" onSubmit={addFormHandler}>
            <input 
              type="text" 
              className="form-control new-post-label" 
              placeholder="Qanday kino?"
              name='name'
              value={state.name}
              onChange={changeHandlerInput}
            />
            <input 
              type="number" 
              className="form-control new-post-label" 
              placeholder="Nechi marotaba ko'rilgan?"
              name='viewers'
              value={state.viewers}
              onChange={changeHandlerInput}
            />
            <button type="submit" className="btn btn-outline-dark">Qo'shish</button>
        </form>
    </div>
  )
}
export default MovieAddForm;