import React, { Component } from 'react';

export default class Form extends Component {
    render = () => (
        <div>
            <div>
                <label htmlFor="songName">Song naam</label>
                <input ref={this.props.refs.songNameInput} type="text"/>

                <label htmlFor="songName">Song url</label>
                <input ref={this.props.refs.songUrlInput} type="text"/>

                <button onClick={this.props.functions.handleForm}>test</button>
            </div>
            <div>
                <select ref={this.props.refs.select}>
                    {this.props.songs.map((elem, i) => (
                        <option key={i} value={elem.url}>{elem.name}</option>
                    ))}
                </select>
                <button onClick={this.props.functions.setOutput}>Get song url</button>
                <div></div>
                <span>output: </span> <span>{this.props.output}</span>
            </div>
        </div>
    )
};