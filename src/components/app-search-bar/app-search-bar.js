import { useContext, useState } from "react";
import { Context } from "../../context";
import "./app-search-bar.css"

const AppSearchBar = props => {
  const [term, setTerm] = useState('')

  const {_, dispatch} = useContext(Context)


  const onTermHandler = e =>{
    const term = e.target.value.toLowerCase()
    setTerm(term)
    dispatch({type: "ON_TERM", payload: term})
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