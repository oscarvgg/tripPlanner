import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
export default class Button extends Component {
    render() {
        return (React.createElement(TouchableOpacity, { onPress: this.props.onPress, style: styles.buttonStyle },
            React.createElement(Text, { style: styles.textStyle }, this.props.children)));
    }
}
const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
});
export { Button };
//# sourceMappingURL=Button.js.map