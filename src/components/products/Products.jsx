/*jshint esnext: true*/

import React from 'react';
import {Link} from 'react-router';

export default class Products extends React.Component {
  static fetchInitialData() {
    // Fake data
    return {
      products: [
        {id: 1, name: 'Be happy (gold)', price: 6},
        {id: 2, name: 'Lightning fast (gold)', price: 6},
        {id: 3, name: 'Conquer (gold)', price: 6},
        {id: 4, name: 'Just focus', price: 5},
        {id: 5, name: 'Warrior not worrier', price: 5},
        {id: 6, name: "Ain't no rules", price: 5}
      ],
      meta: {
        currency: {n: 'usd', s: '$'}
      }
    };
  }

  renderProduct(product, meta) {
    let {id, name, price} = product;
    let {currency} = meta;
    return (
        <li><Link to={`/products/${id}`}>{`${name} - ${currency.s}${price}`}</Link></li>
    );
  }

  render() {
    let {products, meta} = this.props.initialData;
    let renderedProducts = [].map.call(products, (p) => {
      return this.renderProduct(p, meta);
    });
    return (
        <div>
        <h3>Products</h3>
        <ul>{renderedProducts}</ul>
        </div>
    );
  }
};
