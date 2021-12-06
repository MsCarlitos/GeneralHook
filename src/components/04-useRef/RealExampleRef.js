import React, { useState } from 'react'
import MultipeCustomHook from '../03-examples/MultipeCustomHook'

const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h3>Real Example Ref</h3>
            <br/>
            { show && <MultipeCustomHook /> }

            <button
                className='btn btn-primary mt-5'
                onClick={()=> setShow(!show)}
            >
                Show/Hide
            </button>
        </div>
    )
}

export default RealExampleRef
