import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
// eslint-disable-next-line import/no-cycle
import { AlertNotificationContext } from '../../alert-context/alert-state';
import './alert-notification.css';

const AlertNotification = () => {
    const { message, type, isShown } = useContext(AlertNotificationContext);
    return (
        <>
            {isShown && (
                <Alert variant='filled' severity={type} className='alert__container'>
                    {message}
                </Alert>
            )}
        </>
    );
};

export default AlertNotification;
