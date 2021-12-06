import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter+1)
    // }

    const increment = useCallback(
        ( num ) => {
            setCounter(c => c + num)
        },
        [setCounter],
    )

    return (
        <div>
            <h3>useCallback Hook: {counter}</h3>
            <ShowIncrement increment={ increment } />
        </div>
    )
}

export default CallbackHook
