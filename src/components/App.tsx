import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../reducers'
import Map from './Map'

export interface Props {}
export interface State {}

export default class App extends Component<Props, State> {

  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <Map/>
      </Provider>
    )
  }
}
