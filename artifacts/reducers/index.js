import { combineReducers } from 'redux';
import PlacesReducer from './PlacesReducer';
import SessionReducer from './SessionReducer';
export default combineReducers({
    places: PlacesReducer,
    auth: SessionReducer
});
//# sourceMappingURL=index.js.map