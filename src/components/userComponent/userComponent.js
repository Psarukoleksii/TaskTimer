import React, {useEffect, useState} from 'react';
import {Desktop} from "./desktop";
import {fire} from "../firebase";
import {MobileComponent} from "./mobileComponent";

export const UserComponent = ({handLogout, user, firstName, lastName, size}) => {

    const [initialCount, setInitialCount] = useState(null);
    const [countMobile, setCountMobile] = useState(null);

    useEffect(() => {
        const counterRef = fire.database().ref(`counters/${user.uid}`);
        counterRef.on('value', function (count) {
            const data = count.val();
            console.log(data);
            if(!data.initialCount){
                setInitialCount(0)
            }
            if(!data.countMobile){
                setCountMobile(0)
            }
            if (!data) {
                setInitialCount(0);
                setCountMobile(0);
            } else {
                setInitialCount(data.initialCount);
                setCountMobile(data.countMobile)
            }
        })
    }, []);

    return (
        <div>
            <h2>Welcome</h2>
            <p>Nice to meet you, {firstName} {lastName}</p>
            <div>
                {
                    size < 500 ? <MobileComponent user={user} initialCount={initialCount} firstName={firstName}
                                                  lastName={lastName}
                                                  countMobile={countMobile} setCountMobile={setCountMobile}/> :
                        <Desktop user={user} initialCount={initialCount} setInitialCount={setInitialCount}
                                 firstName={firstName} lastName={lastName} countMobile={countMobile}/>
                }
            </div>
            <div>
                <img
                    src="data:image/png;base64,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"
                    alt="timer"/>
            </div>
            <div>
                <button onClick={handLogout}>LogOut</button>
            </div>
        </div>
    )
}
