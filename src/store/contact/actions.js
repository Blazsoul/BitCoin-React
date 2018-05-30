import * as types from './types'
import ContactService from '../../services/ContactService'
// function getContacts(payload) {
//     return {
//         type:types.GET_CONTACTS,
//         payload
//     }
// }


export function getContacts(filterBy) {
    console.log('entered Get Contacts',filterBy)
    return (dispatch) => {
        ContactService.getContacts(filterBy).then(contacts => {
            dispatch({type:types.GET_CONTACTS,payload:contacts})
        })
    }
}