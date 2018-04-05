import { TypedAction, ActionTypes, initialState, Auth } from '../types'

const sessionReducer: (state: Auth, action: TypedAction<any>) => Auth = (state = initialState.auth, action) => {

  switch (action.type) {
    case ActionTypes.emailChanged:
      return { ...state, email: action.payload }
    case ActionTypes.passwordChanged:
      return { ...state, password: action.payload }
    case ActionTypes.logInUser:
      return { ...state, loading: true, error: '' }
    case ActionTypes.loginUserSuccess:
      return { ...state, loading: false, error: '', user: action.payload }
    case ActionTypes.logInUserFail:
      return { ...state, loading: false, error: 'Authentication Failed.' }
    case ActionTypes.logout:
      return { ...initialState.auth  }
    default:
      return state
  }
}

export default sessionReducer