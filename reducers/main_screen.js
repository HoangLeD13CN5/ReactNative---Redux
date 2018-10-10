import { TYPE_PLATFORM } from '../actions/types';

const initialState = {
    platform: 'Android'
};

const platformReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case TYPE_PLATFORM:
            return {
                ...state,
                platform: action.payload
            };
        default:
            return state;
    }
};

export default platformReducer;