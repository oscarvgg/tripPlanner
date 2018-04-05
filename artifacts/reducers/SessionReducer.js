import { ActionTypes, initialState } from '../types';
const sessionReducer = (state = initialState.auth, action) => {
    switch (action.type) {
        case ActionTypes.emailChanged:
            return Object.assign({}, state, { email: action.payload });
        case ActionTypes.passwordChanged:
            return Object.assign({}, state, { password: action.payload });
        case ActionTypes.logInUser:
            return Object.assign({}, state, { loading: true, error: '' });
        case ActionTypes.loginUserSuccess:
            return Object.assign({}, state, { loading: false, error: '', user: action.payload });
        case ActionTypes.logInUserFail:
            return Object.assign({}, state, { loading: false, error: 'Authentication Failed.' });
        case ActionTypes.logout:
            return Object.assign({}, initialState.auth);
        default:
            return state;
    }
};
export default sessionReducer;
//# sourceMappingURL=SessionReducer.js.map