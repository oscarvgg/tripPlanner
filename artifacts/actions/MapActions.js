import { ActionTypes } from '../types';
import firebase from 'firebase';
export const createPlace = (coordinate) => {
    const { currentUser } = firebase.auth();
    const newPlace = {
        position: coordinate
    };
    return () => {
        console.log('creating marker');
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
            console.log('fetching marker');
            dispatch({
                type: ActionTypes.placesFetchSucceeded,
                payload: snapshot.val()
            });
        });
    };
};
export const deletePlace = (placeId) => {
    const { currentUser } = firebase.auth();
    return () => {
        console.log('deleting marker');
        firebase.database()
            .ref(`/users/${currentUser.uid}/points/${placeId}`)
            .remove();
    };
};
//# sourceMappingURL=MapActions.js.map