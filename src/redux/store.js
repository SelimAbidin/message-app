import {combinedReducers} from './reducers'
import {createStore} from 'redux'
import {receiveMessage} from './actions/message'
import {nextID} from '../utils/id-producer'

const store = createStore(combinedReducers)

const intervalID = setInterval(() => {
    const users = store.getState().users
    const list = users.list
    const selected = users.selected
    const index = Math.floor(Math.random() * list.length)
    const sender = list[index].id
    const messageID = nextID()
    const TestMessage = 'Test Message : ' + messageID
    store.dispatch(receiveMessage(TestMessage, messageID, sender, selected))

    if (messageID > 20) {
        clearInterval(intervalID)
    }
}, 5000)


export {store}