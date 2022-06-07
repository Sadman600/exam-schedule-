import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

const ExamField = () => {
    const [examName, setExamName] = useState('');
    // const [value, setValue] = useState('');
    // const [value, setValue] = useState('');
    // const [value, setValue] = useState('');
    const [value, setValue] = useState('');
    const [eCategory, seteCategory] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [exams, setExams] = useState('');
    useEffect(() => {
        fetch('exams.json')
            .then(res => res.json())
            .then(data => setExams(data))
    }, []);
    const handleExam = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleExam}>
            <div>
                <span className="p-float-label">
                    <InputText id="in" value={examName} onChange={(e) => setExamName(e.target.value)} required />
                    <label htmlFor="in">Exam Name</label>
                </span>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <Dropdown className='form-control' optionLabel="name" value={eCategory} options={eCategory} onChange={(e) => seteCategory(e.value)} placeholder="Select a City" />
                </div>
                <div className="col">
                    <Dropdown className='form-control' optionLabel="name" value={eCategory} options={eCategory} onChange={(e) => seteCategory(e.value)} placeholder="Select a City" />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <span className="p-float-label">
                        <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon required />
                        <label htmlFor="date">Exam Start Date</label>
                    </span>
                </div>
                <div className="col">
                    <span className="p-float-label">
                        <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon required />
                        <label htmlFor="date">Exam End Date</label>
                    </span>
                </div>
                <div className="col">
                    <span className="p-float-label">
                        <Calendar timeOnly showTime hourFormat="12" value={time} onChange={(e) => setTime(e.value)} required></Calendar>
                        <label htmlFor="date">Exam Start Time</label>
                    </span>
                </div>
                <div className="col">
                    <span className="p-float-label">
                        <Calendar timeOnly showTime hourFormat="12" value={time} onChange={(e) => setTime(e.value)} required></Calendar>
                        <label htmlFor="date">Exam End Time</label>
                    </span>
                </div>

            </div>

            <div className="row mt-4">
                <div className="col">
                    <span className="p-float-label">
                        <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon required />
                        <label htmlFor="date">Result Publish Date</label>
                    </span>
                </div>
                <div className="col">
                    <span className="p-float-label">
                        <Calendar timeOnly showTime hourFormat="12" value={time} onChange={(e) => setTime(e.value)} required></Calendar>
                        <label htmlFor="date">Result Publish Time</label>
                    </span>
                </div>
                <div className="col">
                    <span className="p-float-label">
                        <InputText id="in" value={value} onChange={(e) => setValue(e.target.value)} required />
                        <label htmlFor="in">Exam Name</label>
                    </span>
                </div>
                <div className="col">
                    <span className="p-float-label">
                        <InputText id="in" value={value} onChange={(e) => setValue(e.target.value)} required />
                        <label htmlFor="in">Exam Name</label>
                    </span>
                </div>
                <div className="col-sm ">
                    <span className="p-float-label">
                        <InputText id="in" value={value} onChange={(e) => setValue(e.target.value)} required />
                        <label htmlFor="in">Exam Name</label>
                    </span>
                </div>

            </div>

            <div className="row mt-4">
                <div className="col">
                    <span className="p-float-label">
                        <InputText id="in" value={value} onChange={(e) => setValue(e.target.value)} required />
                        <label htmlFor="in">Question Mark</label>
                    </span>
                </div>
                <div className="col">
                    <span className="p-float-label">
                        <InputText id="in" value={value} onChange={(e) => setValue(e.target.value)} required />
                        <label htmlFor="in">Negative Mark</label>
                    </span>
                </div>
                <div className="col">
                    <span className="p-float-label">
                        <InputText id="in" value={value} onChange={(e) => setValue(e.target.value)} required />
                        <label htmlFor="in">Live Exam Charge</label>
                    </span>
                </div>
                <div className="col">
                    <span className="p-float-label">
                        <InputText id="in" value={value} onChange={(e) => setValue(e.target.value)} required />
                        <label htmlFor="in">Archive Exam Charge</label>
                    </span>
                </div>

            </div>

            <div>
                <span className="p-float-label mt-4">
                    <InputText id="in" value={value} onChange={(e) => setValue(e.target.value)} required />
                    <label htmlFor="in">Remark</label>
                </span>
            </div>

            <div className='w-25 mx-auto'>

                {/* <Button label="Save" icon="pi pi-check" iconPos="left" onClick={handleExam} /> */}
                <Button type="submit" label="Save" className="mt-2" icon="pi pi-check" iconPos="left" />
            </div>
        </ form>
    );
};

export default ExamField;