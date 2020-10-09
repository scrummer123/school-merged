import React, { Component } from 'react';

export default class List extends Component {
    render = () => (
        <div>
            <h1>Alle songs:</h1>
            <ul>
                {this.props.songs.map((elem, i) => <li key={i}>{elem.name}: <a href={elem.url}>{elem.url}</a></li>)}
            </ul>

            <h1>Gefilterde songs:</h1>
            <ul>
                {this.props.songs.filter((elem, i) => elem.url.startsWith("https://www.youtube.com/watch?v=")).map((elem, i) => (
                    <li key={i}>{elem.name}: <a href={elem.url}>{elem.url}</a></li>
                ))}
            </ul>
        </div>
    )
};