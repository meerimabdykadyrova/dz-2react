// Form.js
import React, { useState } from 'react';
import NameInput from './NameInput';
import LastNameInput from './LastNameInput';
import SubmitButton from './SubmitButton';

function Form() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = () => {
        const fullName = `${name} ${lastName}`;
        setResult(fullName);
    };

    return (
        <div className="form-container">
            <NameInput value={name} onChange={(e) => setName(e.target.value)} />
            <LastNameInput value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <SubmitButton onClick={handleButtonClick} />
            {result && <p className="result">Your first and last name: {result}</p>}
        </div>
    );
}
export default Form;
