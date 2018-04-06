import { ActionTypes, AppState, Coordinate, Place } from '../types'
import { Dispatch } from 'react-redux'
import firebase from 'firebase'

export const createPlace = (coordinate: Coordinate) => {
  const { currentUser } = firebase.auth()
  const newPlace: Place = {
    position: coordinate
  }

  return () => {
    console.log('creating marker')
    firebase.database()
      .ref(`/users/${currentUser.uid}/points`)
      .push(newPlace)
  }
}

export const fetchPlaces = () => {
  const { currentUser } = firebase.auth()

  return (dispatch: Dispatch<AppState>) => {
    firebase.database()
      .ref(`/users/${currentUser.uid}/points`)
      .on('value', snapshot => {
        console.log('fetching marker')
        dispatch({
          type: ActionTypes.placesFetchSucceeded,
          payload: snapshot.val()
        })
      })
  }
}

export const deletePlace = (placeId: string) => {
  const { currentUser } = firebase.auth()

  return () => {
    console.log('deleting marker')
    firebase.database()
      .ref(`/users/${currentUser.uid}/points/${placeId}`)
      .remove()
  }
}