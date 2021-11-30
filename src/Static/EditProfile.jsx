import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {


        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '500px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

export default function EditProfile(handleClose) {

    const classes = useStyles();
    // create state variables for each input
    const [Name, setName] = useState('');
    const [Mobileno, setMno] = useState('');
    const [email, setEmail] = useState('');
    const [Userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [Gender, setGender] = useState('');
    const [City, setCity] = useState('');
    const [Pincode, setPincode] = useState('');

    const handleSave = e => {
        e.preventDefault();
        console.log(Name, Mobileno, email, password, Userid, Gender, City, Pincode);
        handleClose();
    };

    return (
        <>

            <form className={classes.root} onSubmit={handleSave}>
                <h3 style={{ textAlign: 'center', marginTop: '2rem', color: 'rgb(97, 94, 94);' }}>Edit Personal Details</h3>

                <TextField
                    label="Name"
                    variant="outlined"

                    required
                    value={Name}
                    onChange={e => setName(e.target.value)}
                />
                <br />

                <TextField
                    label="Email"
                    variant="outlined"
                    helperText="Enter email e.g (xyz@gmail.com)"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <TextField
                    label="Mobile No"
                    variant="outlined"
                    helperText="Enter valid Mobile no."
                    type="number"
                    required
                    value={Mobileno}
                    onChange={e => setMno(e.target.value)}
                />

                <TextField
                    label="User Id"
                    variant="outlined"

                    required
                    value={Userid}
                    onChange={e => setUserid(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="outlined"

                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <TextField
                    label="Gender"
                    variant="outlined"

                    type="Text"
                    required
                    value={Gender}
                    onChange={e => setGender(e.target.value)}
                />
                <TextField
                    label="City"
                    variant="outlined"
                    type="text"
                    required
                    value={City}
                    onChange={e => setCity(e.target.value)}
                />
                <TextField
                    label="Pin Code"
                    variant="outlined"
                    helperText="Enter 6 digit area pin code"
                    type="number"
                    required
                    value={Pincode}
                    onChange={e => setPincode(e.target.value)}
                />



                <span
                    className='form-input-login'>I agree to the <u><a href="T and c">Terms and Conditions</a></u> and <u><a href="Privacy policy">Privacy Policy</a></u></span>

                <div>
                    <Button variant="contained" onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Save
                    </Button>
                </div>


            </form>
        </>

    )
}
