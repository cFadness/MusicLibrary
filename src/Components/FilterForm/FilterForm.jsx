import React, {Component} from 'react';
import './FilterForm.css';

class FilterForm extends Component{

    constructor(props){
        super(props);
        this.state={
            title: null,
            album: null,
            artist: null,
            genre: null,
            releaseDate: null
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.theFilterFunction(this.state);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Title</label>
                    <input name="title" onChange={this.handleChange} value={this.state.title} />
                </div>
                <div>
                    <label>Artist</label>
                    <input name="artist" onChange={this.handleChange} value={this.state.artist} />
                </div>
                <div>
                    <label>Album</label>
                    <input name="album" onChange={this.handleChange} value={this.state.album} />
                </div>
                <div>
                    <label>Genre</label>
                    <input name="genre" onChange={this.handleChange} value={this.state.genre} />
                </div>
                <div>
                    <label>Release Date</label>
                    <input name="releaseDate" onChange={this.handleChange} value={this.state.releaseDate} />
                </div>
                <div>
                    <button type="submit">Apply Filters</button>
                </div>
            </form>
        );
    }
}

export default FilterForm;