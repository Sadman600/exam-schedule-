import React, { useState, useEffect, useRef } from 'react';
import ExamScheduleRowData from './ExamScheduleRowData';
import { Toast } from 'primereact/toast';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';

const ExamScheduleTable = () => {
    const toastRef = useRef();
    const [schedules, setSchedules] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/examSchedule')
            .then(res => res.json())
            .then(data => setSchedules(data))
    }, [schedules])
    return (
        <div>
            <Toast ref={toastRef} />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Exam</th>
                        <th scope="col">Category</th>
                        <th scope="col">Status</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">S.Time</th>
                        <th scope="col">E.Time</th>
                        <th scope="col">Pub.Date</th>
                        <th scope="col">Pub.Time</th>
                        <th scope="col">Qs.Mark</th>
                        <th scope="col">Neg.Mark</th>
                        <th scope="col">Live.Chrg</th>
                        <th scope="col">Arc.Chrg</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        schedules.map((schedule, index) => <ExamScheduleRowData
                            key={index}
                            schedule={schedule}
                            index={index}
                        ></ExamScheduleRowData>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ExamScheduleTable;