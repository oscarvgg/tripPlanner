import { combineReducers } from 'redux'
import PlacesReducer from './PlacesReducer'
import { Place } from '../types'

export interface AppState {
  places: Place[]
}

export default combineReducers<AppState>({
  places: PlacesReducer
})