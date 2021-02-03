import React, {useEffect} from 'react';
import {fire} from "../../firebase";

export const MobileComponent = ({user, initialCount, firstName, lastName, countMobile, setCountMobile}) =>{

    console.log(countMobile)
    const writeUserDataMobile = () =>{
        fire.database().ref(`counters/${user.uid}`).set({
            userName: firstName,
            userLastName: lastName,
            initialCount: initialCount,
            countMobile: countMobile,
        })
    }

    const handForMobileCounter = () =>{
        setTimeout(()=>{
            setCountMobile(countMobile + 1)
        }, 1000)
    }

    useEffect(()=>{
        if(typeof countMobile === 'number') {
            writeUserDataMobile()
            handForMobileCounter()
        }
    }, [countMobile])

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
