import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default ({path}) => (
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={path}/>
    </Switch>
</BrowserRouter>
);
