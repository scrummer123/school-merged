import React, { useState, useEffect } from 'react';

import { Toolbar, AppBar, Drawer, IconButton, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Menu, Person, CalendarToday } from '@material-ui/icons';

import { Link } from 'react-router-dom';

export default () => {
    const [open, setOpen] = useState(false);

    const links = [
        {
            icon: <Person/>,
            text: 'Login',
            route: '/login'
        },
        {
            icon: <CalendarToday/>,
            text: 'Schedule',
            route: '/schedule'
        }
    ];

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" onClick={() => setOpen(prevState => !prevState)}>
                    <Menu/>
                </IconButton>
            </Toolbar>
            <Drawer anchor="left" open={open} onClose={() => setOpen(prevState => !prevState)}>
                <List>
                    {links.map((item, key) => (
                        <Link style={{ textDecoration: 'none', color: 'grey' }} to={item.route}>
                            <ListItem key={key} button>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
}