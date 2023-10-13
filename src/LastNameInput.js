// DZ-2
import React from 'react';

function LastNameInput({ value, onChange }) {
    return (
        <input type="text" placeholder="Last Name" value={value} onChange={onChange} />
    );
}
export default LastNameInput;
