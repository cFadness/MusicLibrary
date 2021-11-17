import React, {Component} from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import FilterSongsTitle from './FilterSongsTitle/FilterSongsTitle';
import TableOfSongsTitle from './TableOfSongsTitle/TableOfSongsTitle';
import TableOfSongs from './TableOfSongs/TableOfSongs';
import FilterForm from './FilterForm/FilterForm';

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
        let tempArray = this.state.musicArray.filter((songObject) => {
            if(songObject.title == inputObject.title || songObject.artist == inputObject.artist || songObject.album == inputObject.album || songObject.genre == inputObject.genre || songObject.releaseDate == inputObject.releaseDate || object.values(inputObject) === []){
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

    async requestMusicData(){
        try{
            let musicData = await axios.get('http://www.devcodecampmusiclibrary.com/api/music')
            console.log(musicData.data)
            this.setState({
                musicArray: musicData.data
            })
        }
        catch(err){
            console.log("Error in API call to music library", err)
        }
    }

    render(){
        return(
            <div>
                <TitleBar/>
                <FilterSongsTitle/>
                <FilterForm theFilterFunction = {this.filterFunction()}/>
                <TableOfSongsTitle/>
                <TableOfSongs arrayOfSongs = {this.state.tempMusicArray}/>
            </div>
        )
    }
}

export default App;