import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/SessionActions';
import { Button, Card, CardSection, Input, Spinner } from './common';
class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser(email, password);
    }
    renderButton() {
        if (this.props.loading) {
            return React.createElement(Spinner, { size: 'large' });
        }
        return (React.createElement(Button, { onPress: this.onButtonPress.bind(this) }, "Login"));
    }
    render() {
        return (React.createElement(Card, null,
            React.createElement(CardSection, null,
                React.createElement(Input, { secureTextEntry: false, label: 'Email', placeholder: 'email@gmail.com', onChangeText: this.onEmailChange.bind(this), value: this.props.email })),
            React.createElement(CardSection, null,
                React.createElement(Input, { secureTextEntry: true, label: 'Password', placeholder: 'password', onChangeText: this.onPasswordChange.bind(this), value: this.props.password })),
            React.createElement(Text, { style: styles.errorTextStyle }, this.props.error),
            React.createElement(CardSection, null, this.renderButton())));
    }
}
const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});
export default connect((state) => {
    // Map state to props
    const { email, password, error, loading } = state.auth;
    return { email, password, error, loading };
}, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);
//# sourceMappingURL=LoginForm.js.map