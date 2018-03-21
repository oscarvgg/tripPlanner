import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import Map from './Map';
export default class App extends Component {
    render() {
        return (React.createElement(Provider, { store: createStore(reducers) },
            React.createElement(Map, null)));
    }
}
//# sourceMappingURL=App.js.map