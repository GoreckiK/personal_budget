import React, { useState, FormEvent, ChangeEvent } from 'react';
import './Login.css'
import { Button, TextField } from '@material-ui/core';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    return (
        <div className='login'>
            <form onChange={handleSubmit} className='form'>
                <h2>Sign In</h2>
                <div className='form-group'>
                    <span>Login:</span>
                    <TextField id='standard-basic' label='Enter email' type='text' name='email' value={email} onChange={handleEmailChange}></TextField>
                </div>
                <div className='form-group'>
                    <span>Password:</span>
                    <TextField id='standard-basic' label='Password' type='text' name='password' value={password} onChange={handlePasswordChange}></TextField>
                </div>
                <Button variant='contained' color='primary' className='submit-button' size='small'>Submit</Button>
            </form>
        </div>
    )
};

export default Login;