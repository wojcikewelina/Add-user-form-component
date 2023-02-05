import React from 'react';
import './UserAlert.css';
import Button from '../UI/Button'

const UserAlert = (props) => {

    function alertButtonHandler(event) {
        props.onClickAlertButton(false);
    }

    const backdropHandler = (event) => {
        props.onClickAlertButton(false);
    }

    return (<div>
        <div className="backdrop" onClick={backdropHandler}></div>
        <div className='user-alert'>
            <h1>Oups!</h1>
            <p>{props.alertContent}</p>
            <Button onClick={alertButtonHandler}>Ok!</Button>
        </div>
    </div>
    )
}
export default UserAlert;