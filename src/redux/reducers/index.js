import {combineReducers} from 'redux'
import {messages} from './messages'
import {users} from './users'
import {nextID} from '../../utils/id-producer'

function createUser() {
    const currentUser = nextID()
    return function () {
        return currentUser
    }
}

const combinedReducers = combineReducers({
    currentUser: createUser(), 
    messages,
    users
})

export {combinedReducers}