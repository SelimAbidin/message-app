
const USER_ACTIONS = Object.freeze({
    USER_SELECT: 'USER_SELECT',
})

function selectUser(id) {
    return { type: USER_ACTIONS.USER_SELECT , id }
}

export {USER_ACTIONS, selectUser}