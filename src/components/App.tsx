import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
// import Map from './Map'
import Router from '../router'
import { SessionState } from '../types'

export interface Props {}
export interface State {
  sessionState: SessionState
}

export default class App extends Component<Props, State> {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
