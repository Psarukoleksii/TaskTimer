import React from 'react';
import './FormForSignUp.css';

export const FormForSignUp = ({firstName, lastName, setFirstName, setLastName}) =>{
    return(
        <div>
            <div>
                <label>Enter your First Name</label>
                <input type="text" value={firstName} required onChange={e=> setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Enter your Last Name</label>
                <input type="text" required value={lastName} onChange={e=> setLastName(e.target.value)}/>
            </div>
        </div>
    )
}
