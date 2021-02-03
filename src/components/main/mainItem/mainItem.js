import React from 'react';
import './mainItem.css';
import {FormForSignUp} from "./formForSignUp";

export const MainItem = ({email, errorEmail, handLoginUser, handSignUpUser, account, password, passwordError, setEmail, setAccount, setPassword, firstName, lastName, setFirstName, setLastName}) => {

    return (
        <div>
            <div className={'formSection'}>
                <label>Enter your email</label>
                <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}/>
                <p>{errorEmail}</p>
                <label>Enter your password</label>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                <p>{passwordError}</p>
                <div>
                    {account ?(
                        <>
                            <button onClick={handLoginUser}>SignIn</button>
                            <p>Don't have an account ? <span onClick={()=> setAccount(!account)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                            <FormForSignUp firstName={firstName}
                                           lastName={lastName}
                                           setFirstName={setFirstName}
                                           setLastName={setLastName}
                            />
                            <button onClick={handSignUpUser}>Sing UP</button>
                            <p> Have an account ? <span onClick={()=> setAccount(!account)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
