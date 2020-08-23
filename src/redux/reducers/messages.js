import {MESSAGE_ACTIONS} from '../actions/message'
import {USER_ACTIONS} from '../actions/user'
import {nextID} from '../../utils/id-producer'
const messagesByUserID = new Map()


function messages(state=[], action) {
    if (action.type === MESSAGE_ACTIONS.MESSAGE_SEND) {
        const {receiver, sender} = action
        const messages = !messagesByUserID.has(receiver) ? [] : messagesByUserID.get(receiver)
        const messagesWithNewMessage = [...messages, {message: action.message, receiver, sender, id: nextID()}]
        messagesByUserID.set(receiver, messagesWithNewMessage)
        return messagesWithNewMessage
    } else if (action.type === MESSAGE_ACTIONS.MESSAGE_RECEIVED) {
        const friendID = action.sender
        const messages = !messagesByUserID.has(friendID) ? [] : messagesByUserID.get(friendID)
        const messagesWithNewMessage =  [...messages,  {message: action.message, receiver: null, sender: friendID, id: action.messageID}]
        messagesByUserID.set(friendID, messagesWithNewMessage)

        if (action.selectedUserID === friendID) {
            return messagesWithNewMessage
        }

    }  else if (action.type === USER_ACTIONS.USER_SELECT) {
        if (!messagesByUserID.has(action.id)) {
            return []
        } else {
            return [...messagesByUserID.get(action.id)]
        }
    }
    return state
}

export {messages}