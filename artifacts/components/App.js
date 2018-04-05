import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
// import Map from './Map'
import Router from '../router';
export default class App extends Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (React.createElement(Provider, { store: store },
            React.createElement(Router, null)));
    }
}
//# sourceMappingURL=App.js.map