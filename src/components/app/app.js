import { Component } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./app.css"

import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import AppSearchBar from '../app-search-bar/app-search-bar'
import MovieList from "../movie-list/movie-list"
import MovieAddForm from "../movies-add-form/movies-add-form"

class App extends Component { 

    constructor(props){
        super(props)
        this.state = {
            data: [
                {id: 1, name: "Empire of Osman", viewers: 786, favourite: false, like: false},
                {id: 2, name: "Ertugrul", viewers: 987, favourite: false, like: true},
                {id: 3, name: "Omar", viewers: 932, favourite: true, like: false}
            ],
            term: '',
            filter: "all",
        }
    }

    onDelete = id => {
        this.setState(({data}) => ({
            data: data.filter(c => c.id !== id)
        }));
    }

    addForm = item => {
        const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false}
        this.setState(({data}) => ({
            data: [...data, newItem]
        }));
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => {
            const newArr = data.map(item => {
                if(id === item.id){
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
            return {
                data: newArr,
            }
        })
    }

    searchHandler = (arr, term) => {
        if(term.length === 0){
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }

    filterHandler = (arr, filter) => {
        switch (filter) {
            case "popular":
                return arr.filter(c => c.like)
            case "mostViwers": 
                return arr.filter(c => c.viewers > 800)
            default:
                return arr 
        }
    }

    updateTermHandler = term => this.setState({ term });

    updateFilterHandler = filter => this.setState({ filter });

    render(){
        const { data, term, filter } = this.state;
        const allFilmsCount = data.length;
        const favouriteFilmCount = data.filter(c => c.favourite).length;
        const visibleData = this.filterHandler(this.searchHandler(data, term), filter)

        return(
            <div className='app font-monospace'>
                <div className="content">
                    <AppInfo allFilmsCount={allFilmsCount} favouriteFilmCount={favouriteFilmCount}/>
                    <div className="search-bar">
                        <AppSearchBar updateTermHandler={this.updateTermHandler}/>
                        <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
                    </div>
                    <MovieList onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete}/>
                    <MovieAddForm addForm={this.addForm}/>
                </div>
            </div>
        )
    }
}

export default App;