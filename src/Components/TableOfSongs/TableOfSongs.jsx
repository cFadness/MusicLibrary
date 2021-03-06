import React from 'react';
import './TableOfSongs.css';

const TableOfSongs = (props) => {
    let music = props.arrayOfSongs.map((element) => {
        return(
            <tr>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.artist}</td>
                <td>{element.album}</td>
                <td>{element.genre}</td>
                <td>{element.releaseDate}</td>
            </tr>
        )
    });

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Song ID</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                {music}
            </tbody>
        </table>
    );
}
 
export default TableOfSongs;