import React from 'react'
import {UserList as UserListComponent, UserListItem} from '../components/users-list'
import {selectUser} from '../redux/actions/user'
import { connect } from 'react-redux'

function UserList ({users, selectedUserID, selectUser}) {

    return <UserListComponent>
            {users.map( ({id, name}) => <UserListItem onClick={() => selectUser(id)} selected={selectedUserID === id} key={id} >{name}</UserListItem>)}
    </UserListComponent>
}

const mapStateToProps = state => ({
    users: state.users.list,
    selectedUserID: state.users.selected,
})

const mapDispatchToProps = dispatch => ({
    selectUser: e => {
        dispatch(selectUser(e))
    }
})

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList)
export {UserListContainer}