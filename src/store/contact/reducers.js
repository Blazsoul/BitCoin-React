import * as types from './types';
import _ from 'lodash';

const initState = {
    contacts: []
}
export function contactsReducer(state = initState,action) {
    let newState = _.cloneDeep(state);
    // console.log('got action!',action)
    switch(action.type) {
        case types.GET_CONTACTS:
            newState.contacts = action.payload;
            console.log('new state!!',newState)
            return newState;
            break;

        default:
            return state;
            break;
    }
}