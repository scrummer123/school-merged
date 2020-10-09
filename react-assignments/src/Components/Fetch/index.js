import React, { Component } from 'react';

export default class Fetch extends Component {
    state = {
        data: 'loading...'
    };

    componentDidMount = async () => {
        let response = null;
        try {
            response = await fetch('https://api.alternative.me/v2/ticker/', {mode: "cors"});
        } catch(err) {
            console.log(err);
        }
        let data;
        if(response !== null) data = await response.json(); else data = 'failed to load data';
        data = data.data;
        this.setState({
            data: data
        });
    }

    /*
    * Rendering the top 10 coins
    * */
    render = () => (
        <div>
            <ul>
                {Object.keys(this.state.data).filter(i => this.state.data[i].rank < 11).map(i => (
                    <li key={i}>{this.state.data[i].name}: rank {this.state.data[i].rank}</li>
                ))}
            </ul>
        </div>
    )
};