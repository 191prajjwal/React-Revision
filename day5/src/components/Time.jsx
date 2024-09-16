import React, { useState } from "react";

import { useEffect } from "react";

export default function Time() {
    console.log("component re renders");
    const [test, setTest] = useState(0);
    useEffect(() => {
        console.log("component mounted");
      let timer=  setInterval(() => {
            setTest(test + 1);
        }, 1000);

        return ()=>clearInterval(timer)
        //when a re-render happens then the previous setInterval is cleared hence the new set Interval is there on each re-rendering triggerred due to test state change.

        //if we do not clear the timer every re render will run useeffect such that all these use effect run there own setIntervals which may lead to unexpected issues.
    }, [test]);
    //since in useEffect we used dependency array with test state hence use effect will run on mounting as well as on each re render caused by test state change.
    //if we use empty dependency array then useEffect will run only one time that is during mounting phase only.
    ///if we use no dependancy array then use effect will run on every rendering whether it is mounting as well as on re rendering of page due to change in any state/prop.




    return (
        <div>
            <h1>Timer component</h1>
            <h2>{test}</h2>
        </div>
    );
}
