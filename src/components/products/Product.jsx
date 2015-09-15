/*jshint esnext: true*/

import React from 'react';

export default class Product extends React.Component {
  static fetchInitialData() {
    // Fake data
    return {
      product: {id: 1, name: 'Be happy (gold)', price: 6},
      meta: {
        currency: {n: 'usd', s: '$'}
      }
    };
  }

  render() {
    let {product, meta} = this.props.initialData;
    let {id, name, price} = product;
    let {currency} = meta;
    return (
        <div>
        <h3>Product details</h3>
        <dl>
        <dt>ID</dt>
        <dd>{id}</dd>
        <dt>Name</dt>
        <dd>{name}</dd>
        <dt>Price</dt>
        <dd>{`${currency.s}${price}`}</dd>
        </dl>
        </div>
    );
  }
};
