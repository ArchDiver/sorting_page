import React from 'react';
import {Toast, ToastBody} from 'react-bootstrap';

export function Confirmation({ toggle }) {
    return (
        <Toast onClose={() => toggle(false)}>
            <Toast.Header>
                <strong className='mr-auto'>You have started Sorting</strong>
            </Toast.Header>
            <Toast.Body>Georgia</Toast.Body>
        </Toast>
    )
}