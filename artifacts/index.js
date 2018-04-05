import { AppRegistry } from 'react-native';
import App from './components/App';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { firebaseConfig } from '../credentials';
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((user) => {
    if (user === null) {
        // logged out
        console.log('logged out');
        Actions.auth();
        return;
    }
    // logged in
    console.log('logged in');
    Actions.main();
});
AppRegistry.registerComponent('TripPlanner', () => App);
//# sourceMappingURL=index.js.map