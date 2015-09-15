/*jshint esnext: true*/

import React from 'react';
import Router from 'react-router';
import routes from './routes.jsx';

function createElement(Component, props) {
  if (Component.fetchInitialData) {
    return <Component {...props} initialData={Component.fetchInitialData(props.params)}/>;
  } else {
    return <Component {...props} initialData={props.params}/>;
  }
}

React.render(
  <Router routes={routes} createElement={createElement}/>,
  document.getElementById('react-root')
);



// Router.run(routes, Router.HashLocation, function(Handler, state) {
//     csp.go(function*() {
//         let fetchableRoutes = state.routes.filter(function(route) {
//             return route.handler.fetchInitialData;
//         });

//         var fetchedData = {};
//         for (var i = 0; i < fetchableRoutes.length; i += 1) {
//             var data = yield fetchableRoutes[i]
//                     .handler
//                     .fetchInitialData(decodeParams(state.params));
//             fetchedData[fetchableRoutes[i].name] = data;
//         }

//         let props = {
//             initialData: fetchedData
//         };

//         React.render(
//             React.createElement(Handler, props),
//             document.getElementById('react-root')
//         );
//     });
// });
