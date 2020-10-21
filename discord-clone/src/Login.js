import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';

function Login() {

	const signIn = () => {
		auth.signInWithPopup(provider)
			.catch(error => alert(error.message))
	}

	return (
		<div className="login">
			<div className="login__logo">
				<img src="https://vignette.wikia.nocookie.net/dragonhollow/images/d/dd/Discord.png" alt="" />
			</div>

			<Button onClick={signIn}>Sign In</Button>
		</div>
	)
}

export default Login
