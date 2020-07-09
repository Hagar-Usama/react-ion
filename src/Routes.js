import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//import Login from "./login"
import Register from "./register"
import Welcome from "./welcome"

export default () => (
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route path="/" component={Register}/>
    </Switch>
</BrowserRouter>
);