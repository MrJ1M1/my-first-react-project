import { useState } from "react";
import "./app-search-bar.css"

const AppSearchBar = props => {
  const [term, setTerm] = useState('')

  const onTermHandler = e =>{
    const term = e.target.value.toLowerCase()
    setTerm(term)
    props.updateTermHandler(term)
  } 

  return (
    <input 
      type="text"   
      className="form-control search-input" 
      placeholder="Kinolarni qidirish  ....." 
      onChange={onTermHandler}
      value={term}  
    />
  )

}

export default AppSearchBar;