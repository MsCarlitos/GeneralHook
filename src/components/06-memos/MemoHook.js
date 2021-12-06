import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'
import Small from './Small';

const MemoHook = () => {

    const { state, increment } = useCounter( 1 );
    const [show, setShow] = useState(true);
    

    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state])

    return (
        <div>
            <h4>Counter: <Small value={ state } /> </h4>

            <p>{memoProcesoPesado}</p>

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

export default MemoHook
