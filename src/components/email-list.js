import React from 'react';

import EmailListItem from './email-list-item';


const EmailList = (emails) => {

    const EMAIL_LIST_ITEMS = emails.emailsList.map((email) => {
        let inputClass = ((email.id > 2) ? `${email.name} readed` : email.name );
        return <EmailListItem key={email.id} inputClassName={inputClass} name={email.name} dateDelivery={email.dateDelivery} dateDeliveryFormated={email.dateDeliveryFormated} />;
    });

    return (
        <ul className="names">
            {EMAIL_LIST_ITEMS}
        </ul>
    );
};

export default EmailList;