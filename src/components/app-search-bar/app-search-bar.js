import { Component } from "react";
import "./app-search-bar.css"

class AppSearchBar extends Component{

  constructor(props){
    super(props)
    this.state = {term: ''}
  }

  onTermHandler = e => {
    const term = e.target.value.toLowerCase();
    this.setState({ term });
    this.props.updateTermHandler(term);
  }

  render(){
    return (
        <input 
          type="text"   
          className="form-control search-input" 
          placeholder="Kinolarni qidirish  ....." 
          onChange={this.onTermHandler}
          value={this.state.term}  
        />
    )
  }
}

export default AppSearchBar;