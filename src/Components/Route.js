import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App/App';
import NotFound from './NotFound';

class Router extends React.Component {
  render () {
    return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/:id" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    )
  }
}

export default Router;
