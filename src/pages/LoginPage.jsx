import { Button, TextField } from '@mui/material'
import { UserContext } from '../context/UserContext';//Context 1
import React from 'react'
import alert from '../utility/alert';
import { Link, Navigate } from 'react-router-dom';


const LoginPage = () => {
    const { setUserInfo } = React.useContext(UserContext); //Context 2

    const [redirect, setRedirect] = React.useState(false)//redirect1
    const username = React.useRef();
    const password = React.useRef();

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        const usernameVal = username.current.value;
        const passwordVal = password.current.value;
        // console.log(usernameVal + ' ' + passwordVal);

        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameVal,
                password: passwordVal
            }),
            credentials: 'include',
        })
        // console.log(response);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            // alert('User Logged in', 'success')
            alert(data.success, 'success')
            // console.log('data ', data.success);
            setUserInfo(data.data)
            setRedirect(true) //redirect 2
        }
        else {
            const data = await response.json();
            // console.log('data', data);
            alert(data.error, 'error')
        }
    };
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-form">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth id="filled-basic" variant="filled" label="User Name" inputRef={username} required autoComplete='true' />
                        <TextField fullWidth id="filled-basic" variant="filled" label="Password" type='password' inputRef={password} required autoComplete='true' />
                        <Button variant='contained' sx={{ marginTop: '20px' }} type='submit'>Login</Button>
                        {/* <Link to={'/register'} className=''>Register User</Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage