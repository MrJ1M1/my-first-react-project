import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./app.css"

import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import AppSearchBar from '../app-search-bar/app-search-bar'
import MovieList from "../movie-list/movie-list"
import MovieAddForm from "../movies-add-form/movies-add-form"

const App = () => {
    const [data, setData] = useState([
        {id: 1, name: "Empire of Osman", viewers: 786, favourite: false, like: false},
        {id: 2, name: "Ertugrul", viewers: 987, favourite: false, like: true},
        {id: 3, name: "Omar", viewers: 932, favourite: true, like: false}
    ])
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('all')

    const onDelete = id => {
        const newArr = data.filter(c => c.id !== id)
        setData(newArr)
    }

    const addForm = item => {
        const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false}
        const newArr = [...data, newItem]
        setData(newArr)
    }

    const onToggleProp = (id, prop) => {
        const newArr = data.map(item => {
            if(id === item.id){
                return {...item, [prop]: !item[prop]}
            }
            return item
        })
        setData(newArr)
    }

    const searchHandler = (arr, term) => {
        if(term.length === 0){
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }

    const filterHandler = (arr, filter) => {
        switch (filter) {
            case "popular":
                return arr.filter(c => c.like)
            case "mostViwers": 
                return arr.filter(c => c.viewers > 800)
            default:
                return arr 
        }
    }

    const updateTermHandler = term => setTerm(term)

    const updateFilterHandler = filter => setFilter(filter)

    return(
        <div className='app font-monospace'>
            <div className="content">
                <AppInfo allFilmsCount={data.length} favouriteFilmCount={data.filter(c => c.favourite).length}/>
                <div className="search-bar">
                    <AppSearchBar updateTermHandler={updateTermHandler}/>
                    <AppFilter filter={filter} updateFilterHandler={updateFilterHandler}/>
                </div>
                <MovieList onToggleProp={onToggleProp} data={filterHandler(searchHandler(data, term), filter)} onDelete={onDelete}/>
                <MovieAddForm addForm={addForm}/>
            </div>
        </div>
    )

}


export default App;