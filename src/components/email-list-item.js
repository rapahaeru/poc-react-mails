import React from 'react';
import pubSub from 'pubsub-js';

const EmailListItem = (email) => {

    const checkEmail = (e) => {
        console.log(e.target.checked);
        pubSub.publish('update-checked-email-counter', e.target.checked);
    }

    return (
        <li key={email.id} className="name">
        <input type="checkbox" className={email.inputClassName} onClick={checkEmail} />
        <span>{email.name} <small>recebido em: <time className="date" dateTime={email.dateDelivery}>{email.dateDeliveryFormated}</time></small></span>
    </li>
    );
}

export default EmailListItem;