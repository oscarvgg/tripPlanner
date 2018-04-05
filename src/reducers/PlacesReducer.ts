import _ from 'lodash'
import { AppState, ActionTypes, TypedAction, Place, initialState } from '../types'

const placesReducer: (state: Place[], action: TypedAction<any>) => Place[] = (state = initialState.places, action) => {

  switch (action.type) {
    case ActionTypes.placesFetchSucceeded: {
      const places = _.map(action.payload, (val, uid) => {
        return { ...val, uid }
      }) || []
      return places
    }
    default:
      return state
  }
}

export default placesReducer