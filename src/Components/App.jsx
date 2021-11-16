import React, {Component} from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import FilterSongsTitle from './FilterSongsTitle/FilterSongsTitle';
import TableOfSongsTitle from './TableOfSongsTitle/TableOfSongsTitle';
import TableOfSongs from './TableOfSongs/TableOfSongs'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            musicArray: []
        };
    }

    componentDidMount(){
        this.requestMusicData();
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
                <TableOfSongsTitle/>
                <TableOfSongs arrayOfSongs = {this.state.musicArray}/>
            </div>
        )
    }
}

export default App;