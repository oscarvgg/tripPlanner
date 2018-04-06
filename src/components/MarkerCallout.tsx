import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

export class MarkerCallout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bubble}>
          <View style={styles.amount}>
            {this.props.children}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start'
  },
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#4da2ab',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: '#007a87',
    borderWidth: 0.5
  },
  amount: {
    flex: 1
  }
})