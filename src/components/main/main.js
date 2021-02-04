import React, {useEffect, useState} from 'react';
import {fire} from "../firebase";
import {UserComponent} from "../userComponent";
import {MainItem} from "./mainItem";

export const Main = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [account, setAccount] = useState(false);
    const [size, setSize] = useState();

    const clearInputs = () => {
        setEmail('')
        setPassword('');
    }

    const clearErrors = () => {
        setErrorPassword('');
        setErrorEmail('');
    }

    const handLoginUser = () => {
        clearErrors()
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setErrorEmail(err.message)
                        break;
                    case 'auth/wrong-password':
                        setErrorPassword(err.message)
                        break;
                }
            })
    }


    const handSignUpUser = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        setErrorEmail(err.message)
                        break;
                    case 'auth/weak-password':
                        setErrorPassword(err.message)
                        break;
                }
            })
    }

    const handLogout = () => {
        fire.auth().signOut()
    }


    const handListenerUser = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs()
                setUser(user)
            } else {
                setUser('');

            }
        })
    }

    useEffect(() => {
        handListenerUser()
    }, [])

    window.onresize = function () {
        setSize(window.innerWidth);
    };


    const data = user ? <UserComponent handLogout={handLogout} user={user} size={size}/> :
        <MainItem email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handLoginUser={handLoginUser}
                  handSignUpUser={handSignUpUser}
                  account={account}
                  setAccount={setAccount}
                  errorEmail={errorEmail}
                  passwordError={errorPassword}
                  firstName={firstName}
                  lastName={lastName}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
        />

    return (
        <div>
            {data}
        </div>
    )
}
