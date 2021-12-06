import React from 'react'
import { useCounter } from '../../hooks/useCounter'

const CounterWithCustomHook = () => {

    const { state, increment, decrement, restart } = useCounter(20);

    return (
        <>
         <h3>Counter With Custom Hook: { state }</h3>
            <br />
         <button className='btn btn-primary' onClick={()=>increment(2)} >+1</button>
         <span> </span>
         <button className='btn btn-primary' onClick={restart} >Reset</button>
         <span> </span>
         <button className='btn btn-primary' onClick={()=>decrement(2)}>-1</button>
        </>
    )
}

export default CounterWithCustomHook
