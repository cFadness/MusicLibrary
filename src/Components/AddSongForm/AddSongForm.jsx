import React, {Component} from 'react';
import './AddSongForm.css';

class AddSongForm extends Component{

    constructor(props){
        super(props);
        this.state={
            title: '',
            album: '',
            artist: '',
            genre: '',
            releaseDate: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.theAddNewSong(this.state);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label><h6>Title</h6></label>
                    <input name="title" onChange={this.handleChange} value={this.state.title}/>
                </div>
                <div>
                    <label><h6>Album</h6></label>
                    <input name="album" onChange={this.handleChange} value={this.state.album}/>
                </div>
                <div>
                    <label><h6>Artist</h6></label>
                    <input name="artist" onChange={this.handleChange} value={this.state.artist}/>
                </div>
                <div>
                    <label><h6>Genre</h6></label>
                    <input name="genre" onChange={this.handleChange} value={this.state.genre}/>
                </div>
                <div>
                    <label><h6>Release Date</h6></label>
                    <input name="releaseDate" onChange={this.handleChange} value={this.state.releaseDate}/>
                </div>
                <div>
                    <button type="submit" className="mt-3">Add Song</button>
                </div>
            </form>
        );
    }
}

export default AddSongForm;