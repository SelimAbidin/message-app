
const MESSAGE_ACTIONS = Object.freeze({
    MESSAGE_RECEIVED: 'MESSAGE_RECEIVED',
    MESSAGE_SEND: 'MESSAGE_SEND'
})

function sendMessage(message, sender, receiver) {
    return { type: MESSAGE_ACTIONS.MESSAGE_SEND , message, sender, receiver }
}

function receiveMessage(message, messageID, sender, selectedUserID) {
    return { type: MESSAGE_ACTIONS.MESSAGE_RECEIVED , message, messageID, sender, selectedUserID }
}

export {MESSAGE_ACTIONS, sendMessage, receiveMessage}