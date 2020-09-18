import React from 'react'
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer"
import n from "./n.jpg"

function Login() {
    const [{ }, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src={n} />
                <h1>Sign in to NiDar</h1>
                <Button type="submit" onClick={signIn}>Sign In With Google</Button>
            </div>
        </div >
    )
}

export default Login