import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'

const RegisterPage = () => {
    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-form">
                    <h1>Sign Up</h1>
                    <FormControl fullWidth>
                        <TextField id="filled-basic" variant="filled" label="Full Name" />
                        <TextField id="filled-basic" variant="filled" label="Phone Number" type='number' />
                        <TextField id="filled-basic" variant="filled" label="Email" />
                        <TextField id="filled-basic" variant="filled" label="User Name" />
                        <TextField id="filled-basic" variant="filled" label="Password" type='password' />
                        <Button variant='contained' sx={{ marginTop: '20px' }}>Sign Up</Button>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}
// fullWidth is mui property, Button, FormControl, TextField are taken from mui

export default RegisterPage