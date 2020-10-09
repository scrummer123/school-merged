import React, {Component, createRef} from 'react';
import { List, Form, Fetch } from './Components';

export default class App extends Component {
    /*
    * ~~~ START Variables ~~~
    * */
    songNameInput = createRef();
    songUrlInput = createRef();
    select = createRef();

    state = {
        songs: [
            { id: 1, name: "Iann Dior - good day", url:"https://www.youtube.com/watch?v=gFL0hbsDdYg" }
        ],
        output: '...'
    };
    /*
    * ~~~ END Variables ~~~
    * */

    handleForm = () => {
        this.setState({
            songs: [
                ...this.state.songs,
                { id: this.state.songs.slice(-1)[0].id + 1, name: this.songNameInput.current.value, url: this.songUrlInput.current.value }
            ]
        }, () => console.log(this.state.songs));
    }

    setOutput = () => {
        this.setState({
           output: this.select.current.value
        });
    }

    render = () => {
        return (
            <div>
                <List songs={this.state.songs}/>
                <Form refs={{ songNameInput: this.songNameInput, songUrlInput: this.songUrlInput, select: this.select }} functions={{ handleForm: this.handleForm, setOutput: this.setOutput }} songs={this.state.songs} output={this.state.output}/>
                <Fetch/>
            </div>
        );
    }
};
