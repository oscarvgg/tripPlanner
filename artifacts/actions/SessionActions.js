var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { ActionTypes } from '../types';
export const emailChanged = (text) => {
    return {
        type: ActionTypes.emailChanged,
        payload: text
    };
};
export const passwordChanged = (text) => {
    return {
        type: ActionTypes.passwordChanged,
        payload: text
    };
};
export const loginUser = (email, password) => {
    return (dispatch) => __awaiter(this, void 0, void 0, function* () {
        dispatch({ type: ActionTypes.logInUser });
        let user = undefined;
        try {
            user = yield firebase.auth().signInWithEmailAndPassword(email, password);
            loginUserSuccess(dispatch, user);
        }
        catch (error) {
            console.log(error);
        }
        if (user === undefined) {
            try {
                user = yield firebase.auth().createUserWithEmailAndPassword(email, password);
                loginUserSuccess(dispatch, user);
            }
            catch (error) {
                console.log(error);
                loginUserFail(dispatch);
            }
        }
        else {
            loginUserSuccess(dispatch, user);
        }
    });
};
export const logout = () => {
    return (dispatch) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield firebase.auth().signOut();
            dispatch({ type: ActionTypes.logout });
        }
        catch (error) {
            console.log(error);
        }
    });
};
export const loginUserFail = (dispatch) => {
    dispatch({ type: ActionTypes.logInUserFail });
};
export const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: ActionTypes.loginUserSuccess,
        payload: user
    });
    Actions.main();
};
//# sourceMappingURL=SessionActions.js.map