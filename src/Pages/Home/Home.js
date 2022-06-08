import React from 'react';
import { Fieldset } from 'primereact/fieldset';
import ExamField from './ExamField';
import ExamScheduleTable from '../ExamSchedule/ExamScheduleTable';

const Home = () => {

    return (
        <div className='w-auto px-5'>
            <Fieldset legend="Exam Schedule">
                <ExamField></ExamField>
            </Fieldset>
            <ExamScheduleTable></ExamScheduleTable>
        </div>
    );
};

export default Home;