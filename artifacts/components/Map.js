import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
class Map extends Component {
    componentDidUpdate() {
        this.centerMapInPoints();
    }
    componentDidMount() {
        this.centerMapInPoints();
    }
    centerMapInPoints() {
        if (this.props.places.length <= 0) {
            return;
        }
        const identifiers = this.props.places.map(place => {
            return place.identifier;
        });
        this.map.fitToSuppliedMarkers(identifiers, true);
    }
    render() {
        console.log(this.props);
        return (React.createElement(MapView, { style: styles.map, ref: (ref) => this.map = ref }, this.props.places.map(place => (React.createElement(Marker, { key: place.identifier, identifier: place.identifier, coordinate: place.position, title: place.name, description: place.name })))));
    }
}
const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});
const mapStateToProps = (state) => {
    console.log(state.places);
    return { places: state.places };
};
export default connect(mapStateToProps)(Map);
//# sourceMappingURL=Map.js.map