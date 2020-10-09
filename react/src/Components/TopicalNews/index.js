import React, { Component } from 'react';
import { Grid, Container, Typography, Box } from '@material-ui/core';

export default class TopicalNews extends Component {
    articleDots = false;

    constructor() {
        super();
        this.state = {
            articles: 'loading'
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const articles = typeof nextProps.articles === 'object'
            ? nextProps.articles.filter(article => article.title.toLowerCase().endsWith('nos')
                || article.title.toLowerCase().endsWith('nu.nl')
                || article.title.toLowerCase().endsWith('tweakers'))
            : nextProps.articles;

        return {
            prevState,
            articles: articles
        };
    };

    loadNews = () => (
        typeof this.state.articles === 'object' 
            ? this.state.articles.map((article, i) => (
                    <Grid key={i} style={{ minHeight: 'calc(100vh / 3.25)' }} item xs={6}>
                        <Box p={1} style={{ height: '100%' }}>
                            <Box p={1} style={{ background: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1) ), url('${(article.urlToImage || 'https://support.discord.com/hc/user_images/p3ayzhZ2tMvRbQyMzD31TA.png')}') center center`, 
                            height: '100%', 
                            backgroundSize: '100%' }}>
                                <Typography style={{ color: 'white' }} variant="h5">{article.title}</Typography>
                                <hr style={{ width: '20%', display: 'inline-block', margin: '8px 0px' }} />
                                <Typography style={{ color: 'white', fontSize: '18px' }}>{article.description}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                )
            )
            : <p>loading</p>
    );

    render = () => (
        <Container>
            <Grid container>
                {this.loadNews()}
            </Grid>
        </Container>
    )
}