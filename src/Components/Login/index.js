import React, { Component } from 'react';

import { Grid, TextField, Button, Typography, Box } from '@material-ui/core';
import { Person } from '@material-ui/icons';

import Swal from 'sweetalert2';

import * as firebase from 'firebase/app';

export default class Login extends Component {
    alert = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    setInput = e => {
        e.target.id === 'username' && e.target.value != null
            ? this.username = e.target.value
            : this.password = e.target.value;
    };

    submit = async () => {
        let data = { error: false };
        try {
            const users = await firebase.firestore().collection('users')
                .where('username', '==', this.username)
                .where('password', '==', this.password)
                .get();
            const mapped = users.docs.map(user => user.data());
            if(mapped.length > 1) throw 'Something went wrong';
            data.message = 'Logged in';
        } catch (e) {
            data.message = e;
            data.error = true;
            console.error(e);
        } finally {
            data.error === false
                ? this.alert.fire({
                    icon: 'success',
                    title: data.message
                })
                : this.alert.fire({
                    icon: 'error',
                    title: data.message
                });
        }
    };

    render = () => (
        <div>
            <Grid style={{ height: '100vh' }} justify={"center"} alignItems={"center"} container>
                <Grid justify={"center"} alignItems={"center"} direction={"column"} container>
                    <Grid item xs={12}>
                        <Box display="flex" style={{ color: 'grey', padding: '0px 0px 5px 0px' }} alignItems="center">
                            <Person/>
                            <Typography variant="h6">
                                Login
                            </Typography>
                        </Box>
                        <TextField
                            id="username"
                            label="Username"
                            type="text"
                            variant="outlined"
                            onInput={this.setInput}
                        />
                        <div style={{ padding: '5px 0px' }}></div>
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            onInput={this.setInput}
                        />
                        <div style={{ padding: '5px 0px' }}></div>
                        <Button onClick={this.submit} style={{ width: '100%' }} variant={"contained"} color={"primary"}>Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};