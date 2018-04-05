import _ from 'lodash';
import { ActionTypes, initialState } from '../types';
const placesReducer = (state = initialState.places, action) => {
    switch (action.type) {
        case ActionTypes.placesFetchSucceeded: {
            const places = _.map(action.payload, (val, uid) => {
                return Object.assign({}, val, { uid });
            }) || [];
            return places;
        }
        default:
            return state;
    }
};
export default placesReducer;
//# sourceMappingURL=PlacesReducer.js.map