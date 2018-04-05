import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions/SessionActions'
import { Button, Card, CardSection, Input, Spinner } from './common'
import { AppState } from '../types'

export interface LoginFormProps {
  email: string
  password: string
  error: string
  loading: boolean
  emailChanged: (text: string) => any
  passwordChanged: (text: string) => any
  loginUser: (email: string, password: string) => any
}

class LoginForm extends Component<LoginFormProps> {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser(email, password)
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          secureTextEntry={false}
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
})

export default connect(
  (state: AppState) => {
    // Map state to props
    const { email, password, error, loading } = state.auth
    return { email, password, error, loading }
  }, {
    emailChanged,
    passwordChanged,
    loginUser
  }
)(LoginForm)