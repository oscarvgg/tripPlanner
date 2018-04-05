var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Map from './components/Map';
import firebase from 'firebase';
const routerComponent = () => {
    return (React.createElement(Router, null,
        React.createElement(Scene, { key: 'root', hideNavBar: true },
            React.createElement(Scene, { key: 'auth' },
                React.createElement(Scene, { key: 'login', component: LoginForm, title: 'Please Login', initial: true })),
            React.createElement(Scene, { key: 'main' },
                React.createElement(Scene, { onRight: () => __awaiter(this, void 0, void 0, function* () { return yield firebase.auth().signOut(); }), rightTitle: 'Logout', key: 'map', component: Map, title: 'Welcome', initial: true })))));
};
export default routerComponent;
//# sourceMappingURL=router.js.map