import React, {Component} from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import FilterSongsTitle from './FilterSongsTitle/FilterSongsTitle';
import TableOfSongsTitle from './TableOfSongsTitle/TableOfSongsTitle';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
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