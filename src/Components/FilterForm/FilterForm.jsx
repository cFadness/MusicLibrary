import React, {Component} from 'react';

class FilterForm extends Component{

    constructor(props){
        super(props);
        this.state={
            title: '',
            album: '',
            artist: '',
            genre: '',
            releaseDate: '',
        }
    }

    componentDidMount(){
        //handleSubmit function logic to push musicArray to tempMusicArray
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            
        })
        this.props.theFilterFunction(this.state);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input name="title" onChange={this.handleChange} value={this.state.title} />
                <label>Artist</label>
                <input name="artist" onChange={this.handleChange} value={this.state.artist} />
                <label>Album</label>
                <input name="album" onChange={this.handleChange} value={this.state.album} />
                <label>Genre</label>
                <input name="genre" onChange={this.handleChange} value={this.state.genre} />
                <label>Release Date</label>
                <input name="releaseDate" onChange={this.handleChange} value={this.state.releaseDate} />
                <button type="submit">Apply Filters</button>
            </form>
        );
    }
}

export default FilterForm;