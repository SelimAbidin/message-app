import React from 'react'
import {MessageInput as MessageInputComponent} from '../components/message-input'
import {sendMessage} from '../redux/actions/message'
import { connect } from 'react-redux'


function MessageInput({sendMessage, receiver, sernderID}) {
    return <MessageInputComponent onSend={message => sendMessage(message, sernderID, receiver) } />
}


const mapStateToProps = state => {
    return ({
        receiver: state.users.selected,
        sernderID: state.currentUser,
    })

}

const MessageInputContainer = connect( mapStateToProps, {sendMessage})(MessageInput)

export {MessageInputContainer}