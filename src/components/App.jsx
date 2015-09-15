/*jshint esnext: true*/

import React from 'react';

import LayoutHeader from './layout/Header.jsx';
import LayoutFooter from './layout/Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <LayoutHeader />
          <div className="content">
            {this.props.children}
          </div>
        <LayoutFooter />
      </div>
    );
  }
};
