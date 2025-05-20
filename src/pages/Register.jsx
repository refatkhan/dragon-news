import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl py-5 text-center
                '>Register Your Account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Enter Your Name</label>
                        <input type="name" className="input" placeholder="jhon deo" />
                        {/* photo  url  */}
                        <label className="label">Photo Url</label>
                        <input type="photo" className="input" placeholder="photo url" />
                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Register</button>
                        <p className='py-3 font-semibold'>Already Have An Account ? <Link className='text-secondary' to="/auth/login">Log In</Link></p>
                    </fieldset>

                </div>
            </div>
        </div>
    );
};

export default Register;