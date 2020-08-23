import { USER_ACTIONS } from '../actions/user';

const initialState = {
    selected: -1,
    list :[
        {id: 1, name: 'Selim Abidin'},
        {id: 2, name: 'Martin Eden'},
        {id: 3, name: 'Hanry Ford'},
    ]
}

function users(state=initialState, action) {
    if (action.type === USER_ACTIONS.USER_SELECT) {
        state.selected = action.id
        return  {...state, selected:action.id }
    }
    return state
}

export {users}