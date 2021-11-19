import React, {Component} from 'react';
import './FilterForm.css';

class FilterForm extends Component{

    constructor(props){
        super(props);
        this.state={
            search: '',
            searchBy: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log("search state equals " + this.state.search)
        console.log("searchBy state equals " + this.state.searchBy)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.theFilterFunction(this.state);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <select name="searchBy" onChange={this.handleChange} className="form-select form-control" aria-label="Default select example">
                        <option selected value={''}>Filter songs by...</option>
                        <option value={"title"}>Title</option>
                        <option value={"album"}>Album</option>
                        <option value={"artist"}>Artist</option>
                        <option value={"genre"}>Genre</option>
                        <option value={"releaseDate"}>Release Date</option>
                    </select>
                    <input name="search" onChange={this.handleChange} value={this.state.search}/>
                </div>
                <div>
                    <button type="submit" className="mt-3">Apply Filter</button>
                </div>
            </form>
        );
    }
}

export default FilterForm;