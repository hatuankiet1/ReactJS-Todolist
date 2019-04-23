import React, { Component, Fragment } from 'react';
import Product from './../../Components/list/product';
import Table from './../../Components/list/table';
import Summary from './../../Components/list/summary';
import Menu from './../../Components/list/menu';

export default class list extends Component {
  render() {
    return (
      <Fragment>

        <Menu />
        <Product />
        <Table />
        <Summary />
        
      </Fragment>
    );
  }
}

