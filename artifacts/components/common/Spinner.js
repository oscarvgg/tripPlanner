import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
export default class Spinner extends Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (React.createElement(View, { style: styles.spinnerStyle },
            React.createElement(ActivityIndicator, { size: this.props.size || 'large' })));
    }
}
const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export { Spinner };
//# sourceMappingURL=Spinner.js.map