import firebase, { User } from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  ActionTypes,
  AppState
} from '../types'
import { Dispatch } from 'redux'

export const emailChanged = (text: string) => {
  return {
    type: ActionTypes.emailChanged,
    payload: text
  }
}

export const passwordChanged = (text: string) => {
  return {
    type: ActionTypes.passwordChanged,
    payload: text
  }
}

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<AppState>) => {
    dispatch({ type: ActionTypes.logInUser })

    let user: User = undefined

    try {
      user = await firebase.auth().signInWithEmailAndPassword(email, password)
      loginUserSuccess(dispatch, user)
    } catch (error) {
      console.log(error)
    }
    if (user === undefined) {
      try {
        user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        loginUserSuccess(dispatch, user)
      } catch (error) {
        console.log(error)
        loginUserFail(dispatch)
      }
    } else {
      loginUserSuccess(dispatch, user)
    }
  }
}

export const logout = () => {
  return async (dispatch: Dispatch<AppState>) => {
    try {
      await firebase.auth().signOut()
      dispatch({ type: ActionTypes.logout })
    } catch (error) {
      console.log(error)
    }
  }
}

export const loginUserFail = (dispatch) => {
  dispatch({ type: ActionTypes.logInUserFail })
}

export const loginUserSuccess = (dispatch, user: User) => {
  dispatch({
    type: ActionTypes.loginUserSuccess,
    payload: user
  })

  Actions.main()
}