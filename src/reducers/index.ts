import { combineReducers } from 'redux'
import PlacesReducer from './PlacesReducer'
import SessionReducer from './SessionReducer'
import { AppState } from '../types'

export default combineReducers<AppState>({
  places: PlacesReducer,
  auth: SessionReducer
})