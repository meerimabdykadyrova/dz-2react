// import "./Form.css"
//
//
// function NameInput() {
//     return (
//         <div >
//           <input placeholder="searc" className="input"/>
//         </div>
//     );
// }
//
// export default NameInput;



// DZ-2



import React from 'react';

function NameInput({ value, onChange }) {
    return (
        <input type="text" placeholder="First Name" value={value} onChange={onChange} />
    );
}
export default NameInput;
