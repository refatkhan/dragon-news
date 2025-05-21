import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
const Login = () => {
    
    const {logIn} = use (AuthContext)
    const location = useLocation()
     const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        logIn(email,password)
        navigate(`${location.state ? location.state : "/"}`)
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl py-5 text-center
                '>Log In Your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email" required name='email' className="input" placeholder="Email" />
                        {/* password  */}
                        <label className="label">Password</label>
                        <input type="password" required name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='py-3 font-semibold'>Dont’t Have An Account ? <Link className='text-secondary' to="/auth/registration">Register</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;