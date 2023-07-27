import { Button, TextField } from '@mui/material'
import React from 'react'
import alert from '../utility/alert';

const RegisterPage = () => {
    const name = React.useRef();
    const phone = React.useRef();
    const email = React.useRef();
    const username = React.useRef();
    const password = React.useRef();

    const handleSubmit = (ev) => {
        ev.preventDefault(); //stops reloading
        console.log(name.current.value + ' ' + phone.current.value + ' ' + email.current.value + ' ' + username.current.value + ' ' + password.current.value);
        const nameVal = name.current.value;
        const phoneVal = Number(phone.current.value); //phone.current.value is string so converting to NUMBER
        const emailVal = email.current.value;
        const usernameVal = username.current.value;
        const passwordVal = password.current.value;

        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const usernameFormat = /^[A-Za-z][A-Za-z0-9_]{1,29}$/
        const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


        if (nameVal.length < 2 || nameVal.length > 50) {
            // we made this alert in alert.js which takes mssg and fucntion  
            alert('Name should be greater than 1 and less than equal 50 characters', 'error')
            return //used return so that it should not show all validations at one time
        }

        if (phoneVal < 1000000000) {
            alert('Invalid Phone Number', 'error')
            return
        }

        if (!mailformat.test(emailVal)) {
            alert('Invalid email', 'error')
            return
        }

        if (usernameVal.length < 3 || usernameVal.length > 30) {
            alert('Username should be greater than 2 and less than equals 30 characters', 'error')
            return
        }

        if (!usernameFormat.test(usernameVal)) {
            alert('Invalid username! first character should be alphabet [A-Za-z] and other characters can be alphabets, numbers or an underscore so, [A-Za-z0-9_].', 'error')
            return
        }

        if (!passwordFormat.test(passwordVal)) {
            alert('password should have minimum of eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:', 'error')
            return
        }

    };

    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-form">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth id="filled-basic" variant="filled" label="Full Name" inputRef={name} required /> {/*used inputRef instead of ref coz we using mui*/}
                        <TextField fullWidth id="filled-basic" variant="filled" label="Phone Number" type='number' inputRef={phone} required />
                        <TextField fullWidth id="filled-basic" variant="filled" label="Email" inputRef={email} required />
                        <TextField fullWidth id="filled-basic" variant="filled" label="User Name" inputRef={username} required />
                        <TextField fullWidth id="filled-basic" variant="filled" label="Password" type='password' inputRef={password} required />
                        <Button variant='contained' sx={{ marginTop: '20px' }} type='submit'>Sign Up</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
// fullWidth is mui property, Button, FormControl, TextField are taken from mui

export default RegisterPage