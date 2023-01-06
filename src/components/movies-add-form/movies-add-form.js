import { Component } from "react";


import "./movies-add-form.css"

class MovieAddForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      viewers: ''
    }
  }

  changeHandlerInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({name: this.state.name, viewers: this.state.viewers})
    this.setState({
      name: '',
      viewers: ''
    })
  }

  render(){
    const {name, viewers} = this.state;
    return (
      <div className="movies-add-form">
          <h3>Yangi Kino Qo'shish</h3>
          <form className="add-form d-flex" onSubmit={this.addFormHandler}>
              <input 
                type="text" 
                className="form-control new-post-label" 
                placeholder="Qanday kino?"
                name='name'
                value={name}
                onChange={this.changeHandlerInput}
              />
              <input 
                type="number" 
                className="form-control new-post-label" 
                placeholder="Nechi marotaba ko'rilgan?"
                name='viewers'
                value={viewers}
                onChange={this.changeHandlerInput}
              />
              <button type="submit" className="btn btn-outline-dark">Qo'shish</button>
          </form>
      </div>
    )
  }
}


export default MovieAddForm;