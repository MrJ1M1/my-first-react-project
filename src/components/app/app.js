import { useContext, useEffect, useState } from "react"

import "./app.css"

import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import AppSearchBar from '../app-search-bar/app-search-bar'
import MovieList from "../movie-list/movie-list"
import MovieAddForm from "../movies-add-form/movies-add-form"
import { Context } from "../../context";

const App = () => {
    const [isLoading, setIsLoading] = useState(false)

    const {_, dispatch} = useContext(Context)

    useEffect( () => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(json => {
                const newArr = json.map(item => ({
                    name: item.title,
                    id: item.id,
                    viewers: item.id * 200,
                    favourite: false,
                    like: false
                }))
                dispatch({type: 'GET_DATA', payload: newArr})
            })
            .catch(err => console.log(err))
            .finally(setIsLoading(false))
    }, [])

    return(
        <div className='app font-monospace'>
            <div className="content">
                <AppInfo />
                <div className="search-bar">
                    <AppSearchBar />
                    <AppFilter />
                </div>
                {isLoading && 'Loading...'}
                <MovieList />
                <MovieAddForm />
            </div>
        </div>
    )

}


export default App;