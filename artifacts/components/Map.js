import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker, Callout } from 'react-native-maps';
import { createPlace, fetchPlaces, deletePlace } from '../actions/MapActions';
import { MarkerCallout } from './MarkerCallout';
import { Button } from './common';
class Map extends Component {
    componentDidUpdate() {
        this.centerMapInPoints();
    }
    componentWillMount() {
        this.props.fetchPlaces();
    }
    componentDidMount() {
        this.centerMapInPoints();
    }
    // Logic:
    centerMapInPoints() {
        if (this.props.places.length <= 0) {
            return;
        }
        const identifiers = this.props.places.map(place => {
            return place.uid;
        });
        this.map.fitToSuppliedMarkers(identifiers, true);
    }
    // Eventss:
    onMapPress(event) {
        console.log('tapped on: ' + JSON.stringify(event.nativeEvent));
        this.props.createPlace(event.nativeEvent.coordinate);
    }
    onMarkerPress(event) {
        console.log('tapped on marker: ' + JSON.stringify(event.nativeEvent));
    }
    onMarkerDeleteButtonPress(idPlace) {
        this.props.deletePlace(idPlace);
    }
    render() {
        console.log(this.props);
        return (React.createElement(MapView, { style: styles.map, ref: (ref) => this.map = ref, onPress: this.onMapPress.bind(this), onMarkerPress: this.onMarkerPress.bind(this) }, this.props.places.map(place => (React.createElement(Marker, { key: place.uid, identifier: place.uid, coordinate: place.position, title: place.name, description: place.name, onPress: this.onMarkerPress.bind(this) },
            React.createElement(Callout, null,
                React.createElement(MarkerCallout, null,
                    React.createElement(Button, { onPress: this.onMarkerDeleteButtonPress.bind(this, place.uid) }, "Delete"))))))));
    }
}
const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});
const mapStateToProps = (state) => {
    return { places: state.places };
};
export default connect(mapStateToProps, {
    createPlace,
    fetchPlaces,
    deletePlace
})(Map);
//# sourceMappingURL=Map.js.map