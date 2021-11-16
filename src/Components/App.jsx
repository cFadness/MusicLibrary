import React, {Component} from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import FilterSongsTitle from './FilterSongsTitle/FilterSongsTitle';
import TableOfSongsTitle from './TableOfSongsTitle/TableOfSongsTitle';

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
            console.log(musicData)
            this.setState({
                musicArray: musicData
            })
        }
        catch(err){
            console.log("Error in API call to music library")
        }
    }

    render(){
        return(
            <div>
                <TitleBar/>
                <FilterSongsTitle/>
                <TableOfSongsTitle/>
            </div>
        )
    }
}

export default App;