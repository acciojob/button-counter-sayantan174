import React, { useState } from 'react'

const Counter = ()=>{
    const [counter,setCounter]=useState(0);
    const increaseCounter = ()=>{
        setCounter(counter+1);
    }
    return(
        <>
            <p>Button clicked {counter} times</p>
            <button onClick={increaseCounter}>Click Me</button>
        </>
    )
}
export default Counter;