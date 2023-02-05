import React from 'react';
import './UserItem.css'

const UserItem = (props) => {
    return <li className='user-item'>
        <div>{props.name}</div>
 <div>
     {props.age}  years old
    </div>
    </li>
};


export default UserItem;