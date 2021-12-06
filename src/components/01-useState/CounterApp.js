import React, { useState } from 'react'

const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
    });

    const {counter1, counter2} = counter
    return (
        <div>
            <h3>counter1 { counter1 }</h3>
            <h3>counter2 { counter2 }</h3>
            <br />

            <button 
                className="btn btn-primary"
                onClick={ () => {
                    setCounter({
                        ...counter,
                        counter1: counter1 + 1,
                    })}
                }
            > 
                1+ 
            </button>

        </div>
    )
}

export default CounterApp
