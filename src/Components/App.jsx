import React, {Component} from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import FilterSongsTitle from './FilterSongsTitle/FilterSongsTitle';
import TableOfSongsTitle from './TableOfSongsTitle/TableOfSongsTitle';
import TableOfSongs from './TableOfSongs/TableOfSongs';
import FilterForm from './FilterForm/FilterForm';
import AddSongForm from './AddSongForm/AddSongForm';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            musicArray: [],
            tempMusicArray: []
        };
    }

    componentDidMount(){
        this.requestMusicData();
    }

    filterFunction = (inputObject) => {
        if(inputObject.search === ''){
            this.setState({
                tempMusicArray: this.state.musicArray
            })
        }
        else{
            let tempArray = this.state.musicArray.filter((songObject) => {
                if(
                    (songObject.title.startsWith(inputObject.search) && inputObject.searchBy==="title") ||
                    (songObject.artist.startsWith(inputObject.search) && inputObject.searchBy==="artist") ||
                    (songObject.album.startsWith(inputObject.search) && inputObject.searchBy==="album") ||
                    (songObject.genre.startsWith(inputObject.search) && inputObject.searchBy==="genre") ||
                    (songObject.releaseDate.startsWith(inputObject.search) && inputObject.searchBy==="releaseDate")
                    ){
                    return true
                }
                else{
                    return false
                }
            });
            this.setState({
                tempMusicArray: tempArray
            })
        }
    }

    addNewSong = async (inputObject) => {
        try{
            let addedSong = await axios.post('http://localhost:3000/api/songs', inputObject)
            console.log(`Added new song: ${addedSong.data}`)
            this.state.musicArray.push(addedSong.data)
            this.setState({
                musicArray: this.state.musicArray,
                tempMusicArray: this.state.musicArray
            })
        }
        catch(err){
            console.log("Error posting to Music Library", err)
        }
    }

   async requestMusicData() {
        try{
            let musicData = await axios.get('http://localhost:3000/api/songs')
            console.log(`musicData variable, now has the data from axios ${musicData.data}`)
            this.setState({
                musicArray: musicData.data,
                tempMusicArray: musicData.data
            });
        }
        catch(err){
            console.log("Error in API call to music library", err)
        }
    }

    render(){
        return(
            <div className="my-container">
                <div className="row-1">
                    <div className="col-md-12">
                        <TitleBar/>
                    </div>
                </div>
                <div className="row-2">
                    <div className="col-md-12">
                        <h4>Add New Song</h4>
                    </div>
                </div>
                <div className="row-3">
                    <div className="col-lg-6 col-lg-7 mx-auto text-center form p-4">
                        <AddSongForm theAddNewSong = {this.addNewSong}/>
                    </div>
                </div>
                <div className="row-4">
                    <div className="col-md-12">
                        <FilterSongsTitle/>
                    </div>
                </div>
                <div className="row-5">
                    <div className="col-lg-6 col-lg-7 mx-auto text-center form p-4">
                        <FilterForm theFilterFunction = {this.filterFunction}/>
                    </div>
                </div>
                <div className="row-6">
                    <div className="col-md-12">
                        <TableOfSongsTitle/>
                    </div>
                </div>
                <div className="row-7">
                    <div className="col-md-12">
                        <TableOfSongs arrayOfSongs = {this.state.tempMusicArray}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;