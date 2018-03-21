import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
class Map extends Component {
    render() {
        return (React.createElement(MapView, { style: styles.map }));
    }
}
const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});
const mapStateToProps = (state) => {
    console.log(state);
    return { places: state.places };
};
export default connect(mapStateToProps)(Map);
//# sourceMappingURL=Map.js.map