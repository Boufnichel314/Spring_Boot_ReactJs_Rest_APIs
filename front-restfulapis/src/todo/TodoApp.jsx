import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const ariaLabel = { 'aria-label': 'description' };
export default function TodoApp() {
  return (
    <div className='TodoApp'>
    <h3>Todo managment application !</h3>
    <LoginComponent />
    {/* <WelcomeComponent /> */}
    </div>
  )
}

const form_container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    boxSizing: 'border-box',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
    '& > :not(style)': { m: 1 },
    };

function LoginComponent(){
    return (
        <div className='LoginComponent'>
            <h3>Login Component</h3>
            <div className="form-container" style={form_container}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
                >
                <Input placeholder='UserName'  inputProps={ariaLabel} />
                <Input placeholder='Password' inputProps={ariaLabel} />

             </Box>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label">
                    Log in
                </Button>
            </Stack>
            </div>
        </div>
    )
}
//Welcome Component
function WelcomeComponent(){
    return (
        <div className='WelcomeComponent'>Welcome Component</div>
    )
}