import React, { useEffect, useRef, forwardRef, createRef } from 'react'
import {MessageContent as MessageContentComponent, Message} from '../components/message-content'
import { connect } from 'react-redux'


function MessageContent({messages}) {
    return <MessageContentComponent>
                {messages.map((props) => {
                    const {message,id, receiver} = props
                    return <Message ownMessage={receiver != null} key={id}>{message}</Message>
                })}
    </MessageContentComponent>
}

const mapStateToProps = state => ({
    messages: state.messages
})

const MessageContentContainer = connect(mapStateToProps)(MessageContent)
export {MessageContentContainer}
