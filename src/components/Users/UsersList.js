import React from 'react';
import UserItem from './UserItem';
import Card from '../UI/Card'
import './UsersList.css';


const UsersList = (props) => {
    const usersList = props.users.map((user) => {
        return <UserItem name={user.name} age={user.age} key={(Math.random() * 1000).toString()} />
    })
    return (<div>
        {props.users.length > 0 ? <Card className='users-list-contaner'><ul>{usersList}</ul></Card> : ""}
    </div>
    )
}

export default UsersList;