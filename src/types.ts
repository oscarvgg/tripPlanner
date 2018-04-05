import { Action } from 'redux'
import { User } from 'firebase'

export const initialState: AppState = {
  places: [],
  auth: {
    email: '',
    password: '',
    error: '',
    loading: false,
    user: undefined
  }
}

// Enums:

export enum SessionState {
  signedIn,
  notSignedIn,
  unknown
}

export enum ActionTypes {
  emailChanged = 'email_changed',
  passwordChanged = 'password_changed',
  logInUser = 'log_in_user',
  logInUserFail = 'login_user_fail',
  loginUserSuccess = 'login_user_success',
  logout = 'logout'
}

// Actions:

export interface TypedAction<Payload> extends Action {
  type: ActionTypes
  payload?: Payload
  error?: Boolean
}

// Entities:

export interface Auth {
  email: string
  password: string
  error: string
  loading: boolean
  user?: User
}

export interface Result<ResultType> {
  value: ResultType
  error: string
  loading: boolean
}

export interface AppState {
  places: Place[]
  // currentUser: User
  auth: Auth
}

export interface Location {
  latitude: number
  longitude: number
}

export interface Place {
  identifier: string
  name: string
  position: Location
}