import React, { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    })

    const { name, email } = formState;
    
    useEffect(() => {
        // console.log('hey')
    },[])

    useEffect(() => {
        // console.log('FormState Cambiox')
    },[formState])

    useEffect(() => {
        // console.log('Email Cambiox')
    },[email])

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h3>Simple Form</h3>
            <br />
            <div className='form-group p-1'>
                <input 
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className='form-group p-1'>
                <input 
                    type="email"
                    name='email'
                    className='form-control'
                    placeholder='Tu email'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name === '123' && <Message /> }
        </>
    )
}

export default SimpleForm
