import React, { Component, Fragment } from 'react';
import url from './url';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>

          {this.url(url)}

        </Fragment>
      </BrowserRouter>
    );
  }
  url = url => {
    let route = '';
    route = url.map((value, index) => {
      return (
        <Route key={index} path={ value.path } exact={ value.exact } component={ value.component } />
      );
    });
    return <Switch> ${route} </Switch>
  }
}

