import React, {Component} from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import FilterSongsTitle from './FilterSongsTitle/FilterSongsTitle';
import TableOfSongsTitle from './TableOfSongsTitle/TableOfSongsTitle';
import TableOfSongs from './TableOfSongs/TableOfSongs';
import FilterForm from './FilterForm/FilterForm';
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
        if(inputObject.search === null || inputObject.search === ''){
            this.setState({
                tempMusicArray: this.state.musicArray
            })
        }
        else{
            let tempArray = this.state.musicArray.filter((songObject) => {
                if((songObject.title.startsWith(inputObject.search) && inputObject.searchBy==="title") || (songObject.artist.startsWith(inputObject.search) && inputObject.searchBy==="artist") || (songObject.album.startsWith(inputObject.search) && inputObject.searchBy==="album") || (songObject.genre.startsWith(inputObject.search) && inputObject.searchBy==="genre") || (songObject.releaseDate.startsWith(inputObject.search) && inputObject.searchBy==="releaseDate")){
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

   async requestMusicData() {
        try{
            let musicData = await axios.get('http://www.devcodecampmusiclibrary.com/api/music')
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
                        <FilterSongsTitle/>
                    </div>
                </div>
                <div className="row-3">
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                        <FilterForm theFilterFunction = {this.filterFunction}/>
                    </div>
                </div>
                <div className="row-4">
                    <div className="col-md-12">
                        <TableOfSongsTitle/>
                    </div>
                </div>
                <div className="row-5">
                    <div className="col-md-12">
                        <TableOfSongs arrayOfSongs = {this.state.tempMusicArray}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;