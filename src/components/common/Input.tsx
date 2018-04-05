import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'

export interface InputProps {
  label: string
  value: string
  placeholder: string
  secureTextEntry: boolean
  onChangeText: (text: string) => void
}

export default class Input extends Component<InputProps> {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{this.props.label}</Text>
        <TextInput
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          autoCorrect={false}
          style={styles.inputStyle}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export { Input }
