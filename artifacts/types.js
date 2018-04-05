export const initialState = {
    places: [],
    auth: {
        email: '',
        password: '',
        error: '',
        loading: false,
        user: undefined
    }
};
// Enums:
export var SessionState;
(function (SessionState) {
    SessionState[SessionState["signedIn"] = 0] = "signedIn";
    SessionState[SessionState["notSignedIn"] = 1] = "notSignedIn";
    SessionState[SessionState["unknown"] = 2] = "unknown";
})(SessionState || (SessionState = {}));
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["emailChanged"] = "email_changed";
    ActionTypes["passwordChanged"] = "password_changed";
    ActionTypes["logInUser"] = "log_in_user";
    ActionTypes["logInUserFail"] = "login_user_fail";
    ActionTypes["loginUserSuccess"] = "login_user_success";
    ActionTypes["logout"] = "logout";
})(ActionTypes || (ActionTypes = {}));
//# sourceMappingURL=types.js.map