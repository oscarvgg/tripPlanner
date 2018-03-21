import React, { Component } from 'react'
import {
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import { Place } from '../types'

export interface Props {
  places: Place[]
}
export interface State {}

class Map extends Component<Props, State> {

  render() {
    return (
      <MapView
      style={styles.map} />
    )
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})

const mapStateToProps = (state) => {
  console.log(state)
  return { places: state.places }
}

export default connect(mapStateToProps)(Map)