import React from 'react'
import useForm from '../../hooks/useForm';
import Message from './Message';

const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:'',
    })

    const { name, email, password } = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Form With Custom Hook</h3>
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
            <div className='form-group p-1'>
                <input 
                    type="password"
                    name='password'
                    className='form-control'
                    placeholder='Tu password'
                    autoComplete='off'
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type='submit' className='btn btn-outline-success m-1' >Guardar</button>

            { name === '123' && <Message /> }
        </form>
    )
}

export default FormWithCustomHook
