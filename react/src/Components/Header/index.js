import React, { Component } from "react";
import { Container, Toolbar, Typography, Box, Button, Grid } from "@material-ui/core";
// Drawer imports
import { List, ListItem, ListItemText, Drawer, Divider, IconButton, Input, withStyles } from "@material-ui/core";
import { Menu, Search } from "@material-ui/icons";

import "./index.scss";
import { Link } from "react-router-dom";

const styles = theme => ({
    searchBar: {
        [theme.breakpoints.down('sm')]: {
            left: '0px',
            right: '0px'
        },
        [theme.breakpoints.up('md')]: {
            minWidth: '15vw',
            maxWidth: '20vw'
        },
    }
});

export default withStyles(styles)(class Header extends Component {
    articleDots = false;

    state = {
        drawer: {
            open: false
        },
        searchArticles: [],
        style: {
            searchBar: {
                input: {
                    display: 'none'
                },
                box: {
                    width: "0px"
                }
            }
        },
    };

    displayProps = {
        mobileHidden: {
            xs: 'none',
            sm: 'block'
        },
        mobileHiddenFlex: {
            xs: 'none',
            sm: 'flex'
        },
        mobileShown: {
            xs: 'block',
            sm: 'none'
        },
        mobileShownFlex: {
            xs: 'flex',
            sm: 'none'
        },
    };

    menuItems = [
        {
            name: 'News',
            metaData: {
                pathname: '/'
            }
        },
        {
            name: 'Crypto currencies',
            metaData: {
                pathname: '/crypto'
            }
        },
    ];

    setSearchBarHeight = r => {
        if(r == null || this.state.style.searchBar.input.top != null) return;
        const height = r.clientHeight + "px";
        this.setState({ ...this.state, style: {searchBar: {input: { ...this.state.style.searchBar.input, top: height}}}});
    };

    /* 
    * when a user searches articles, filter them
    * */
    setArticles = e => {
        let articles = this.props.articles;
        if(typeof articles === 'object') {
            articles = articles.filter(article => article.title != null 
                && article.description != null 
                && article.title.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0)
            .map(article => {
                if(article.title.substr(-3) === "..." || article.description.substr(-3) === "...") this.articleDots = true;
                const dots = this.articleDots === false ? '...' : '';

                article.title = article.title.replace(/^(.{50}[^\s]*).*/, '$1') + dots;
                article.description = article.description.replace(/^(.{80}[^\s]*).*/, '$1') + dots;
                return article;
            });
        }
        /* 
        * set default result if no articles returned
        * */
        if(articles.length <= 0 || typeof articles !== 'object') articles = [{ title: 'No results', description: 'Oops we haven\'t found any articles' }];

        this.setState({ searchArticles: articles.slice(0, 4) });
    }

    toggleDrawer = () => this.setState({ ...this.state, drawer: { open: !this.state.drawer.open } });
    toggleSearchBar = () => this.setState({ ...this.state, style: {searchBar: {input: { ...this.state.style.searchBar.input,
                    display: (this.state.style.searchBar.input.display === "block" ? "none" : "block")
                }}}});

    toolbarContent = () => (
        <Grid ref={this.setSearchBarHeight} id="toolbarContainer" alignItems={"center"} container>
            <Grid item xs={4}>
                <Typography id="title" component={"span"} variant={"h6"}>
                    <Box letterSpacing={3} component={"span"} mr={1}>
                        SIMON
                    </Box>
                    news
                </Typography>
            </Grid>
            <Grid item xs={4} component={Box} display={this.displayProps.mobileHidden}>
                <div id="buttonContainer">
                    {this.menuItems.map((item, index) => (
                        <Link key={index} to={item.metaData.pathname} style={{ textDecoration: 'none', color: 'black' }}>
                            <Button className={"toolbarButton"} key={index}>
                                <Box className={"buttonBox"}>
                                    {item.name}
                                </Box>
                            </Button>
                        </Link>
                    ))}
                </div>
            </Grid>
            <Grid item xs={8} sm={4}>
                <Grid container justify="flex-end" alignItems="center" id="lastItem">
                    <Box display={this.displayProps.mobileHiddenFlex}>
                        <Box pr={1}></Box>
                        <Divider orientation="vertical" flexItem/>
                        <Box pr={1}></Box>
                    </Box>
                    <IconButton onClick={this.toggleSearchBar}>
                        <Search/>
                    </IconButton>
                    <div id="searchBar" style={this.state.style.searchBar.input} className={this.props.classes.searchBar}>
                        <Input onChange={this.setArticles}/>
                        <div id="searchResult">
                            {this.state.searchArticles.map((item, key) => (
                                <div key={key}>
                                    <Typography className={"title"} variant={"h6"}>{item.title.split(" - ")[0]}</Typography>
                                    <Typography className={"subTitle"} variant={"subtitle2"}>{item.description}</Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Box display={this.displayProps.mobileShown}>
                        <IconButton onClick={this.toggleDrawer}>
                            <Menu />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );

    /*
    * Just an example...
    * */
    drawerContent = () => (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary={"test"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                {this.menuItems.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    render = () => (
        <div id="headerRoot">
            <Container fixed>
                <Toolbar>
                    {this.toolbarContent()}
                </Toolbar>
                <Drawer anchor={"right"} open={this.state.drawer.open} onClose={() => this.toggleDrawer()}>
                    {this.drawerContent()}
                </Drawer>
            </Container>
        </div>
    );
});