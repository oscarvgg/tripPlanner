import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect, Dispatch } from 'react-redux'
import MapView, { Marker } from 'react-native-maps'
import { Place, Coordinate } from '../types'
import { createPlace, fetchPlaces } from '../actions/MapActions'

export interface Props {
  places: Place[],
  createPlace: (coordinate: Coordinate) => any
  fetchPlaces: () => any
}

class Map extends Component<Props> {

  map: MapView

  componentDidUpdate() {
    this.centerMapInPoints()
  }

  componentWillMount() {
    this.props.fetchPlaces()
  }

  componentDidMount() {
    this.centerMapInPoints()
  }

  centerMapInPoints() {
    if (this.props.places.length <= 0) {
      return
    }
    const identifiers = this.props.places.map(place => {
      return place.uid
    })
    this.map.fitToSuppliedMarkers(identifiers, true)
  }

  // Actions:
  onMapPress(event) {
    console.log('tapped on: ' + JSON.stringify(event.nativeEvent))
    this.props.createPlace(event.nativeEvent.coordinate)
  }

  render() {
    console.log(this.props)
    return (
      <MapView
      style={styles.map}
      ref={ (ref) => this.map = ref }
      onPress={this.onMapPress.bind(this)}>
        {this.props.places.map(place => (
          <Marker
            key={ place.uid }
            identifier={ place.uid }
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
  return { places: state.places }
}

export default connect(mapStateToProps, {
  createPlace,
  fetchPlaces
})(Map)