import React, { useState, useEffect } from 'react';

/* 
* Importing react-router-dom
* */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* 
* Importing my own components 
* */
import { Header, TopicalNews, Crypto } from './Components';

/*
* Component which removes standard html styling
* */
import { CssBaseline } from "@material-ui/core";

/*
* These imports make up the api data
* */
import { getCurrency, articles } from './Api';

export default () => {

    /*
    * global states
    * */
    const [news, setNews] = useState('loading');
    const [currency, setCurrency] = useState('loading');

    /*
    * set news and crypto currency data
    * */
    let getApiData = async () => {
        const currency = await getCurrency();
        const news = await articles;
        
        setCurrency(currency);
        if('response' in news && 'articles' in news.response) setNews(news.response.articles);
    };

    /* 
    * fetch api data on load
    * */
    useEffect(() => {
        getApiData()
    }, []);

    /* 
    * loading app configurations :
    *   - default styles
    *   - navigation
    *   - router (2 links)
    * */
    return (
        <div>
            <CssBaseline/>
            <Router>
                <Header articles={news}/>

                <Switch>
                    <Route exact path="/">
                        <TopicalNews articles={news}/>
                    </Route>
                    <Route exact path="/crypto">
                        <Crypto coinData={currency}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};