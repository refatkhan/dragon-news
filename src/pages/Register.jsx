import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext)
    const [errorName, setErrorName] = useState("");
    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value
        if(name.length <5){
            setErrorName("Name Should be more than 5 words")
        }else{
            errorName("")
        }
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl py-5 text-center
                '>Register Your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        {/* name */}
                        <label className="label">Enter Your Name</label>
                        <input type="text"
                            name='name'
                            className="input"
                            placeholder="jhon deo"
                            required
                        />
                        {
                            errorName && <p className="text-xs text-error">{errorName}</p>
                        }
                        {/* photo  url  */}
                        <label className="label">Photo Url</label>
                        <input type="text"
                            name='photo'
                            className="input"
                            placeholder="photo url"
                            required
                        />
                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email"
                            className="input"
                            placeholder="Email"
                            name='email'
                            required />
                        <label className="label">Password</label>
                        <input type="password"
                            className="input"
                            placeholder="Password"
                            name='password'
                            required
                        />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='py-3 font-semibold'>Already Have An Account ? <Link className='text-secondary' to="/auth/login">Log In</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;