import React from 'react';
import { Fieldset } from 'primereact/fieldset';
import ExamField from './ExamField';

const Home = () => {

    return (
        <div className='w-auto px-5'>

            <Fieldset legend="Exam Schedule">
                <ExamField></ExamField>
            </Fieldset>

        </div>
    );
};

export default Home;