
// import './Form.css'
// function SubmitButton() {
//     return (
//         <div >
//            <button className="button">Advanced Search</button>
//         </div>
//     );
// }
//
// export default SubmitButton;
//



//DZ-2

import React from 'react';
function SubmitButton({ onClick }) {
    return <button onClick={onClick}>OK</button>;
}
export default SubmitButton;
