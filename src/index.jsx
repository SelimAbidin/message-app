import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import {UserListContainer} from './containers/user-list.container'
import {MessageContentContainer} from './containers/message-content.container'
import {MessageInputContainer} from './containers/message-input.container'
// import { MessageContent } from './components/message-content'
// import { MessageInput } from './components/message-input'
import './global.style.scss'

function App() {
    return <Provider store={store}>
                <>
                    <section className="users-panel">
                        <UserListContainer></UserListContainer>
                    </section>
                    <section className="chat-group">
                        <MessageContentContainer></MessageContentContainer>
                        <MessageInputContainer></MessageInputContainer>
                    </section>
                </>
            </Provider>
}


ReactDOM.render(<App></App>, document.getElementById('root'))