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
            ],
            term: '',
            filter: ''
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
        if(name.length > 2 && salary.length > 1) {
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
    }

    // onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findInex(el => el.id === id);

        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

        //     return {
        //         data: newArr
        //     }
        // })
    //     this.setState(({data}) => ({
    //         data: data.map(el => {
    //             if(el.id === id) {
    //                 return {...el, increase: !el.increase}
    //             }
    //             return el;
    //         })
    //     }))
    // }

    // onTogglePromotion = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(el => {
    //             if(el.id === id) {
    //                 return {...el, promotion: !el.promotion}
    //             }
    //             return el;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
                    data: data.map(el => {
                        if(el.id === id) {
                            return {...el, [prop]: !el[prop]}
                        }
                        return el;
                    })
                }))
    }

    searchEmp = (data, term) => {
        if (term.length === 0) {
            return data;
        }
        return data.filter(el => {
            return el.name.indexOf(term) > -1
        })
    }

    onUptadeSearch = (term) => {
        this.setState({term: term})
    }

    filterPost = (data, filter) => {
        switch (filter) {
            case 'promotion':
                return data.filter(el => el.promotion);
            case 'moreThan1000':
                return data.filter(el => el.salary > 1000);
            default:
                return data
        }
    }

    onFilter = (filter) => {
        this.setState({
            filter: filter
        })
    } 


    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(el => el.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUptadeSearch={this.onUptadeSearch}/>
                    <AppFilter onFilter={this.onFilter}/>
                </div>
    
                <EmpList 

                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
                />
    
                <EmpAddForm
                onAddEmp={this.addItem}
                />
            </div>
        );
    }
}

export default App;
