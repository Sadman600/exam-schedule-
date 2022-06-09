import React, { useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const ExamField = () => {

    const toastRef = useRef();
    const [examName, setExamName] = useState('');
    const [examCategory, setExamCategory] = useState('');
    const [exam1, setExam1] = useState([]);
    const [examStatus, setExamStatus] = useState('');
    const [exam2, setExam2] = useState([]);
    const [examStartDate, setExamStartDate] = useState('');
    const [examEndDate, setExamEndDate] = useState('');
    const [examStartTime, setExamStartTime] = useState('');
    const [examEndTime, setExamEndTime] = useState('');
    const [resultPublishDate, setResultPublishDate] = useState('');
    const [resultPublishTime, setResultPublishTime] = useState('');
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [questionMark, setQuestionMark] = useState('');
    const [negativeMark, setNegativeMark] = useState('');
    const [liveExamCharge, setLiveExamCharge] = useState('');
    const [archiveExamCharge, setArchiveExamCharge] = useState('');
    const [remark, setRemark] = useState('');
    useEffect(() => {
        fetch('exams.json')
            .then(res => res.json())
            .then(data => {
                setExam1(data[0]);
                setExam2(data[1]);
            })
    }, []);

    const handleExam = (e) => {
        e.preventDefault();

        fetch('https://immense-basin-69386.herokuapp.com/examSchedule', {
            method: 'POST',
            body: JSON.stringify({
                examName: e.target.examName.value,
                examCategory,
                examStatus,
                examStartDate: e.target.examStartDate.value,
                examEndDate: e.target.examEndDate.value,
                examStartTime: e.target.examStartTime.value,
                examEndTime: e.target.examEndTime.value,
                resultPublishDate: e.target.resultPublishDate.value,
                resultPublishTime: e.target.resultPublishTime.value,
                day: e.target.day.value,
                hour: e.target.hour.value,
                minute: e.target.minute.value,
                questionMark: e.target.questionMark.value,
                negativeMark: e.target.negativeMark.value,
                liveExamCharge: e.target.liveExamCharge.value,
                archiveExamCharge: e.target.archiveExamCharge.value,
                remark: e.target.remark.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toastRef.current.show({ severity: 'success', summary: 'Success Message', detail: 'Exam Schedule Saved' });
                    e.target.value.reset();
                }

            })
    }

    return (
        <div>
            <Toast ref={toastRef} />
            <form onSubmit={handleExam}>
                <div>
                    <span className="p-float-label">
                        <InputText id="in" name='examName' value={examName} onChange={(e) => setExamName(e.target.value)} required />
                        <label htmlFor="in">Exam Name</label>
                    </span>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <Dropdown className='form-control' value={examCategory} options={exam2} onChange={(e) => setExamCategory(e.value)} placeholder="Select Exam Category" />
                    </div>
                    <div className="col">
                        <Dropdown className='form-control' value={examStatus} options={exam1} onChange={(e) => setExamStatus(e.value)} placeholder="Select Exam Status" />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        <span className="p-float-label">
                            <Calendar name='examStartDate' value={examStartDate} onChange={(e) => setExamStartDate(e.target.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                            <label htmlFor="date">Exam Start Date</label>

                        </span>
                    </div>
                    <div className="col">
                        <span className="p-float-label">
                            <Calendar name='examEndDate' value={examEndDate} onChange={(e) => setExamEndDate(e.target.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                            <label htmlFor="date">Exam End Date</label>
                        </span>
                    </div>
                    <div className="col">
                        <span className="p-float-label">
                            <Calendar name='examStartTime' timeOnly showTime hourFormat="12" value={examStartTime} onChange={(e) => setExamStartTime(e.value)} ></Calendar>
                            <label htmlFor="date">Exam Start Time</label>
                        </span>
                    </div>
                    <div className="col">
                        <span className="p-float-label">
                            <Calendar name='examEndTime' timeOnly showTime hourFormat="12" value={examEndTime} onChange={(e) => setExamEndTime(e.value)} ></Calendar>
                            <label htmlFor="date">Exam End Time</label>
                        </span>
                    </div>

                </div>

                <div className="row mt-4">
                    <div className="col">
                        <span className="p-float-label">
                            <Calendar name='resultPublishDate' value={resultPublishDate} onChange={(e) => setResultPublishDate(e.target.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                            <label htmlFor="date">Result Publish Date</label>
                        </span>
                    </div>
                    <div className="col">
                        <span className="p-float-label">
                            <Calendar name='resultPublishTime' timeOnly showTime hourFormat="12" value={resultPublishTime} onChange={(e) => setResultPublishTime(e.value)} ></Calendar>
                            <label htmlFor="date">Result Publish Time</label>
                        </span>
                    </div>
                    <div className="col">
                        <span className="p-float-label">
                            <InputText id="in" name='day' value={day} onChange={(e) => setDay(e.target.value)} />
                            <label htmlFor="in">Day</label>
                        </span>
                    </div>
                    <div className="col">
                        <span className="p-float-label">
                            <InputText id="in" name='hour' value={hour} onChange={(e) => setHour(e.target.value)} />
                            <label htmlFor="in">Hour</label>
                        </span>
                    </div>
                    <div className="col-sm ">
                        <span className="p-float-label">
                            <InputText id="in" name='minute' value={minute} onChange={(e) => setMinute(e.target.value)} />
                            <label htmlFor="in">Minute</label>
                        </span>
                    </div>

                </div>

                <div className="row mt-4">
                    <div className="col">
                        <span className="p-float-label">
                            <InputText id="in" name='questionMark' value={questionMark} onChange={(e) => setQuestionMark(e.target.value)} />
                            <label htmlFor="in">Question Mark</label>
                        </span>
                    </div>
                    <div className="col">
                        <span className="p-float-label">
                            <InputText id="in" name='negativeMark' value={negativeMark} onChange={(e) => setNegativeMark(e.target.value)} />
                            <label htmlFor="in">Negative Mark</label>
                        </span>
                    </div>
                    <div className="col">
                        <span className="p-float-label">
                            <InputText id="in" name='liveExamCharge' value={liveExamCharge} onChange={(e) => setLiveExamCharge(e.target.value)} />
                            <label htmlFor="in">Live Exam Charge</label>
                        </span>
                    </div>
                    <div className="col">
                        <span className="p-float-label">
                            <InputText id="in" name='archiveExamCharge' value={archiveExamCharge} onChange={(e) => setArchiveExamCharge(e.target.value)} />
                            <label htmlFor="in">Archive Exam Charge</label>
                        </span>
                    </div>

                </div>

                <div>
                    <span className="p-float-label mt-4">
                        <InputText id="in" name='remark' value={remark} onChange={(e) => setRemark(e.target.value)} />
                        <label htmlFor="in">Remark</label>
                    </span>
                </div>

                <div className='w-25 mx-auto'>
                    <Button type="submit" label="Save" className="mt-2" icon="pi pi-check" iconPos="left" />
                </div>
            </ form>
        </div>
    );
};

export default ExamField;