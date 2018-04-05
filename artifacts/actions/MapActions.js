import { ActionTypes } from '../types';
import firebase from 'firebase';
export const createPlace = (coordinate) => {
    const { currentUser } = firebase.auth();
    const newPlace = {
        position: coordinate
    };
    return () => {
        firebase.database()
            .ref(`/users/${currentUser.uid}/points`)
            .push(newPlace);
    };
};
export const fetchPlaces = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database()
            .ref(`/users/${currentUser.uid}/points`)
            .on('value', snapshot => {
            dispatch({
                type: ActionTypes.placesFetchSucceeded,
                payload: snapshot.val()
            });
        });
    };
};
//# sourceMappingURL=MapActions.js.map