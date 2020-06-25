import React, { useEffect, useState } from 'react';


import * as firebase from 'firebase/app';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, eventsLoaded } from '@syncfusion/ej2-react-schedule';
import { Button, Modal, Box } from '@material-ui/core';

import Swal from 'sweetalert2';

import './index.css';

export default () => {
    const db = firebase.firestore();
    const [open, setOpen] = useState(false);
    const data = [];
    let scheduleObj = null;

    const form = (
        `
        <div style="display: flex; flex-direction: column">
            <input type="text" placeholder="Subject"/>
            <input type="text" placeholder="Start: YYYY|M|dd|hh|mm"/>
            <input type="text" placeholder="End"/>

        </div>
        `
    );
    
    const modal = Swal.mixin({
        title: "Make a new event",
        html: form,
        showCloseButton: true,
        showConfirmButton: false
    })

    const getUserSchedule = async () => {
        const user = await db.collection('users').doc("W2Alg6PRUY5Ljhljrtim").get();

        const calendarData = user.data().calendarData;

        return (
            calendarData.map(data => ({
                    Subject: (data.Subject || "No title"),
                    StartTime: new Date(...data.StartTime.split('|')),
                    EndTime: new Date(...data.EndTime.split('|'))
                })
            )
        );
    };

    useEffect(() => {
        const userData = getUserSchedule();
        userData.then(userData => scheduleObj.addEvent(userData));
    }, [scheduleObj]);

    return (
        <div>
            <Box my={1} mx={1}>
                <Button variant="contained" color="primary" onClick={() => modal.fire()}>
                    Add event
                </Button>
            </Box>
            <ScheduleComponent ref={t => scheduleObj = t} selectedDate={new Date(2020,6,25)} eventSettings={{ dataSource: data }} currentView="Week">
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    );   
}