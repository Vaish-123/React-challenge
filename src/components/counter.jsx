import React from 'react'

function Counter({title,...obj}) {
    return (
        <div>
            <p>{title}:{obj.c}</p>
        </div>
    )
}

export default Counter
