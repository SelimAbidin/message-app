import React from 'react'
import './message-content.style.scss'


function Message({children, ownMessage}) {
    return <div className={`message ${ownMessage ? 'own' : 'not-own' }`} >
        {children}
    </div>
}


function MessageContent({children}) {
    return <div className="message-content">
        {children}
    </div>
}

export {MessageContent, Message}
