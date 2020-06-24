import React, { useEffect, useState } from 'react';


import * as firebase from 'firebase/app';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, eventsLoaded } from '@syncfusion/ej2-react-schedule';
import './index.css';

export default () => {
    const db = firebase.firestore();
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState(false);
    let scheduleObj = null;

    const getUserSchedule = async () => {
        const users = await db.collection('users').get();

        const calendarData = users.docs
        .map(user => user.data())
        .filter(user => user.calendarData != null)
        .map(userWithCalendar => ({
            Subject: userWithCalendar.calendarData[0].Subject,
            StartTime: new Date(...userWithCalendar.calendarData[0].StartTime.split('|')),
            EndTime: new Date(...userWithCalendar.calendarData[0].EndTime.split('|')),
        }));

        return calendarData;
    };

    useEffect(() => {
        if(typeof scheduleObj === 'object') {
            const userData = getUserSchedule();
            userData.then(userData => setData(userData));
        }
    }, [scheduleObj]);

    return (
        <ScheduleComponent ref={t => scheduleObj = t} selectedDate={new Date(2020, 6)} eventSettings={{ dataSource: data }} currentView="Month">
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    );   
}