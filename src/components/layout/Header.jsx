/*jshint esnext: true*/

import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
        <header>
        <Link to="/"><h1>Open Entry</h1></Link>
        <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        </ul>
        </nav>
        </header>
    );
  }
};
