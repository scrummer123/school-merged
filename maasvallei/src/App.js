import React, { useState } from 'react';
import { Login, Nav, Schedule } from './Components';
import {CssBaseline} from '@material-ui/core';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <CssBaseline/>
      <Nav/>
      <Switch>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/schedule" exact>
          <Schedule/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
