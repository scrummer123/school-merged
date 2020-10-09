import React, { Component } from 'react';

/*
* api functions 
* */
import { getCurrency, setNewRequest } from '../../Api';

/* 
* sweetalert
* */
import Swal from 'sweetalert2';

/* 
* material ui imports
* */
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';

export default class Crypto extends Component {
    // ! ---------
    // ! variables
    // ! ---------

    state = {
        coinData: 'loading',
        coinSearch: 'bitcoin'
    };

    static stopPropsUpdate = false;

    static Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    /*
    * sets state when new props from parent state are received, stop updating if nextprops.coindata is an object (when it got fetched, stop updating).
    * */
    static getDerivedStateFromProps(nextProps, prevState) {
        if(typeof prevState.coinData === 'string') {
            return {
                ...prevState,
                coinData: (typeof nextProps.coinData === 'object' 
                    ? {name: 'bitcoin', ...nextProps.coinData.response.tickers[0] || 'no index found'} 
                    : nextProps.coinData)
            };
        }
        return null;
    }

    // ! -------------
    // ! state setters
    // ! -------------

    /* 
    * set value on input
    * */
    setInput = e => this.setState({ 
        ...this.state,
        coinSearch: e.target.value
    });

    /* 
    * get value from api
    * */
    submit = async () => {
        const coinResult = await getCurrency(this.state.coinSearch);
        const userMessage = this.setCoinResult(coinResult);
        Crypto.Toast.fire({
            icon: 
                Crypto.coinError.result 
                    ? 'error' 
                    : 'success',
            title: Crypto.coinError.message
        });
    }

    // ! -------------------------------------------
    // ! helper functions to make code above cleaner
    // ! -------------------------------------------

    /*
    * @return :
    *   message for the user
    * 
    * set coin result on submit & notify user about it
    * */
    setCoinResult = coin => {
        setNewRequest(true);
        
        if(!coin.error.result) {
            let data;

            if(!('tickers' in coin.response) || !('0' in coin.response.tickers)) {
                data = { last: 'No data found' };
                coin.error.result = true;
                coin.error.message = 'Coin data not found'
            } else data = coin.response.tickers[0];

            this.setState({
                ...this.state,
                coinData: {name: coin.response.name, ...data}
            })
        } else {
            this.setState({
                ...this.state,
                coinData: coin.error.message
            });
        }

            console.log(this.state.coinData);
        
        Crypto.coinError = coin.error;
    };

    // ! -----------------
    // ! onclick functions
    // ! -----------------

    showTickerInfo = () => {
        let result = '';
        Object.keys(this.state.coinData).forEach(key => {
            if(typeof this.state.coinData[key] !== 'object') result += `${key} : ${this.state.coinData[key]} <br>`;
        });
        Swal.fire('Coin info',  result)
    };

    // ! ------
    // ! render
    // ! ------

    render = () => (
        <Grid 
            style={{ height: '75vh', transform: 'scale(1.2)' }}
            container 
            justify="center" 
            alignItems="center"
        >
            <Grid 
                style={{ color: 'grey' }}
                item
            >
                <div style={{ display: 'flex' }}>
                    <Search/>
                    <Typography>Search coins by <a href="https://api.coingecko.com/api/v3/coins/list">coin ids</a></Typography>
                </div>
                <Grid 
                    item 
                    xs={12}
                >
                    <TextField 
                        id="standard-search" 
                        label="Search field" 
                        type="search"
                        fullWidth
                        onInput={this.setInput}
                    />
                </Grid>
                <Grid 
                    style={{ margin: '5px 0px 0px 0px' }}
                    display="flex" 
                    item xs={12}
                    component={Box}
                >
                    <Button 
                        component={Box} 
                        my={3}
                        flexGrow={1} 
                        variant="contained" 
                        color="primary" 
                        onClick={this.submit}
                    >search</Button>

                </Grid>
                <Grid item>
                    <Typography onClick={this.showTickerInfo}>
                        {typeof this.state.coinData === 'object'
                            ? `Most recent coin price of coin ${this.state.coinData.name} (USD):` + this.state.coinData.last || 'unknown'
                            : this.state.coinData}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}; 