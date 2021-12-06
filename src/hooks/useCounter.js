import { useState } from "react"

export const useCounter = (initialState = 10 ) => {
    const [state, setState] = useState(initialState)

    const increment = ( factor ) => {
        setState(state + factor)
    }

    const decrement = ( factor ) => {
        setState(state - factor)
    }

    const restart = () => {
        setState( initialState )
    }

    return {
        state,
        increment,
        decrement,
        restart
    }

}
