import React, { Component } from 'react'
import {
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import MapView, {
   Marker
} from 'react-native-maps'
import { Place } from '../types'

export interface Props {
  places: Place[]
}
export interface State {}

class Map extends Component<Props, State> {

  map: MapView

  componentDidUpdate() {
    console.log('update')
    if (this.props.places.length <= 0) {
      return
    }
    this.map.fitToSuppliedMarkers(this.props.places.map(place => {
      return place.position.latitude.toString()
    }), true)
  }



  render() {
    console.log(this.props)
    return (
      <MapView
      style={styles.map}
      ref={ (ref) => this.map = ref }>
        {this.props.places.map(place => (
          <Marker
            key={ place.position.latitude.toString() }
            coordinate={ place.position }
            title={ place.name }
            description={ place.name }
          />
        ))}
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})

const mapStateToProps = (state) => {
  console.log(state.places)
  return { places: state.places }
}

export default connect(mapStateToProps)(Map)