import React from 'react';
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export default function CalendarCreator() {
    return (
        <Container>
            <div >
                <div className="gCal-logo">
                    GCal Sync
                </div>
                <a className="logout-button" onClick={event => window.location.href = '/login'}>Logout</a>
            </div>
            <div className="line-Horizontal"></div>
            <div className="line-Vertical"></div>
        </Container>
    );
}

