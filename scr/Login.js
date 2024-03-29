import React, {useState} from "react";
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from './firebase'
// import {useSpring, animated} from "react-spring";




function Login() {
    // const props = useSpring({ x: 100, from: { x: 0 } })
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn =e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error =>(error.message()))

        //some fancy firebase login
    }
    const register = e =>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) =>{
                console.log(auth);
                //it successfully create a new user with email and password
                if (auth)  {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

        //some fancy firebase register shitttt....
    }

    return (


        <div className="login">
            <Link to='/'>
            <img className="login__logo"

                src="https://www.grocerybusiness.ca/images/2020/10/ama2.png" alt=""
            />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword((e.target.value))}/>

                    <button type='submit' onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By continuing, you agree to the Fake Amazon's Conditions of Use and Privacy Notice,
                    our cookies Notice and our Interest-Based Ads Notice.

                </p>

                <button onClick={register} className='login__registerButton'>Create your amazon account</button>


            </div>

        </div>

    );
}

export default Login;