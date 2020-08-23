import React, { useState } from 'react'
import './message-input.style.scss'

function MessageInput({onSend}) {
    const [text, setText] = useState('')
    return <div className="message-input">
        <textarea className="input" value={text} onChange={ event => setText(event.target.value)}></textarea>
        <button className="send-button" onClick={e => onSend(text) }>SEND</button>
    </div>
}

MessageInput.defaultProps = {
    onSend: () => console.log('Seems you missed "onSend" but using')
}

export {MessageInput}
