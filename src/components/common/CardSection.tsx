import React from 'react'
import { StyleSheet, View } from 'react-native'

export interface CardSectionProps {
}

export default class CardSection extends React.Component<CardSectionProps, any> {
  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
})

export { CardSection }