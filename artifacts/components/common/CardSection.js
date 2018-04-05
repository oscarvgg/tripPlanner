import React from 'react';
import { StyleSheet, View } from 'react-native';
export default class CardSection extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.containerStyle }, this.props.children));
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
});
export { CardSection };
//# sourceMappingURL=CardSection.js.map