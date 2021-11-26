import React, { useState, useEffect } from 'react'

function Usf() {
    const [state, setState] = useState(0)
    const [state2, setState2] = useState(0)
    useEffect(() => {
        console.log('Mounting');
        console.log('State :' + state);
        console.log('State2 :' + state2);
    }, [state])
    return (
        <div>
            <button onClick={() => setState(state + 1)}>Add</button>
            <h3>ACounter : {state}</h3>
            <button onClick={() => setState2(state2 + 1)}>+</button>
            <h3>SCounter : {state2}</h3>
        </div>
    )
}

export default Usf
