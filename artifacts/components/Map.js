import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import { createPlace, fetchPlaces } from '../actions/MapActions';
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
    centerMapInPoints() {
        if (this.props.places.length <= 0) {
            return;
        }
        const identifiers = this.props.places.map(place => {
            return place.uid;
        });
        this.map.fitToSuppliedMarkers(identifiers, true);
    }
    // Actions:
    onMapPress(event) {
        console.log('tapped on: ' + JSON.stringify(event.nativeEvent));
        this.props.createPlace(event.nativeEvent.coordinate);
    }
    render() {
        console.log(this.props);
        return (React.createElement(MapView, { style: styles.map, ref: (ref) => this.map = ref, onPress: this.onMapPress.bind(this) }, this.props.places.map(place => (React.createElement(Marker, { key: place.uid, identifier: place.uid, coordinate: place.position, title: place.name, description: place.name })))));
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
    fetchPlaces
})(Map);
//# sourceMappingURL=Map.js.map