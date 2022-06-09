import React, { useRef } from 'react';
import { Button } from 'primereact/button';

import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
const ExamScheduleRowData = ({ schedule, index }) => {
    const toastRef = useRef();
    const navigate = useNavigate();
    const { _id, examName, examCategory, examStatus, examStartDate, examEndDate,
        examStartTime, examEndTime, resultPublishDate, resultPublishTime,
        questionMark, negativeMark, liveExamCharge, archiveExamCharge } = schedule;
    const handleDeleteSchedule = id => {
        console.log(id);
        fetch(`https://immense-basin-69386.herokuapp.com/examSchedule/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toastRef.current.show({ severity: 'success', summary: 'Success Message', detail: ' Schedule Delete successfully' });
                }
            });
    }
    const handleEditSchedule = id => {
        navigate(`/editExamSchedule/${id}`)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{examName}</td>
            <td>{examCategory}</td>
            <td>{examStatus}</td>
            <td>{examStartDate}</td>
            <td>{examEndDate}</td>
            <td>{examStartTime}</td>
            <td>{examEndTime}</td>
            <td>{resultPublishDate}</td>
            <td>{resultPublishTime}</td>
            <td>{questionMark}</td>
            <td>{negativeMark}</td>
            <td>{liveExamCharge}</td>
            <td>{archiveExamCharge}</td>
            <td><Button icon="pi pi-times" onClick={() => handleDeleteSchedule(_id)} className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" /></td>
            <td><Button icon="pi pi-user-edit" onClick={() => handleEditSchedule(_id)} className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" /></td>
        </tr>
    );
};

export default ExamScheduleRowData;