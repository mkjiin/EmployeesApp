import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmpList from '../emp-list/emp-list';
import EmpAddForm from '../emp-add-form/emp-add-form';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Walter', salary: 500, increase: false, promotion: false, id: 1 },
                {name: 'Saul', salary: 2500, increase: false, promotion: false, id: 2},
                {name: 'Gus', salary: 5000, increase: false, promotion: false, id: 3}
            ]
        }
        this.maxId = this.state.data.length + 1
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(el => el.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name, salary: salary, increase: false, promotion: false, id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmpList 
                data={this.state.data}
                onDelete={this.deleteItem}
                />
    
                <EmpAddForm
                onAddEmp={this.addItem}
                />
            </div>
        );
    }
}

export default App;
