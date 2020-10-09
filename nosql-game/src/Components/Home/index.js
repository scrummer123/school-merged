import React, { Component } from 'react';
import { TextField, Button, Typography } from "@material-ui/core";
import firebase from 'firebase/app';

export default class Home extends Component {
    database = firebase.database();

    state = {
        name: null
    }

    styles = {
        root: {
            margin: '50px',
            padding: '20px',
            borderLeft: '1px solid black'
        }
    }

    changed = event => {
        this.name = event.target.value;
    }

    submitted = async () => {
        const players = this.database.ref('/players');

        if(this.name != null) {
            await players.push({
                name: this.name
            });
            this.setState({ name: this.name });
        }
    }

    render = () => (
        <div style={this.styles.root}>
            <Typography variant="h6">Insert into database</Typography>
            <TextField onChange={this.changed} id="outlined-basic" label="Your name" variant="outlined" />
            <br/>
            <br/>
            <Button onClick={this.submitted} color="primary">Submit</Button>
            {this.state.name !== null
                ? <div>Your name: {this.state.name}</div> : <div>No name set</div>
            }
        </div>
    );
}