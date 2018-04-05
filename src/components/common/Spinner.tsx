import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

export interface SpinnerProps {
  size: number | 'small' | 'large'
}

export default class Spinner extends Component<SpinnerProps> {
  state = {}
  render() {
    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={ this.props.size || 'large'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export { Spinner }