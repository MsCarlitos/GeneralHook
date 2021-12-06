import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h3>Focus Screen</h3>

            <input
                ref={ inputRef }
                className='form-control m-1'
                placeholder='Su nombre'
            />

            <button 
                className='btn btn-primary m-1 mt-5'
                onClick={ handleClick }
            > Focus </button>
        </div>
    )
}

export default FocusScreen
