import React, {useEffect} from 'react';
import {fire} from "../../firebase";

export const Desktop = ({user, initialCount, setInitialCount, firstName, lastName, countMobile}) =>{


    const handForCounter = () =>{
        setTimeout(()=>{
            setInitialCount(initialCount+1);
        }, 1000)
    }

    const writeUserData = () => {
        fire.database().ref(`counters/${user.uid}`).set({
            userName: firstName,
            userLastName: lastName,
            initialCount: initialCount,
            countMobile: countMobile,
        });
    }


    useEffect(()=>{
        if(typeof initialCount === 'number') {
            writeUserData()
            handForCounter()
        }
    }, [initialCount])

    return(
        <div>
            <h2>
                Desktop timer: {initialCount}
            </h2>
            <h2>
                Mobile timer: {countMobile}
            </h2>
        </div>
    )
}


