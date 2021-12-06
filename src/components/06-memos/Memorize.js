import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import Small from './Small';

const Memorize = () => {

    const { state, increment } = useCounter( 10 );
    const [show, setShow] = useState(true)

    return (
        <div>
            <h4>Counter: <Small value={ state } /> </h4>

            <button
                className='btn btn-primary'
                onClick={()=>increment(1)}
            >+1</button>

            <button
                className='btn btn-outline-primary m-3'
                onClick={()=>{
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify( show )}
            </button>
        </div>
    )
}

export default Memorize
