import React from 'react'
import './user-list.style.scss'

function UserListItem({selected,children, onClick}) {
    return <li className={`user-list-item ${!selected ? '' : 'selected' }`} onClick={onClick}>{children}</li>
}

function UserList({children}) {
    return <ul className="user-list">
      {children}
    </ul>
}

UserListItem.defaultProps = {
  onClick: () => {}
}

export {UserList, UserListItem}