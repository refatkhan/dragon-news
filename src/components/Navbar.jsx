import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userlogo from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {

    const { user, logOut } = use(AuthContext)
    const handleLogout = () => {
        logOut()
    }
    return (
        <div className='flex justify-between items-center'>
            <div className="">

            </div>
            <div className="nav flex gap-4 text-accent">
                <NavLink className={({ isActive }) => isActive ? 'text-fuchsia-600' : ' '} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-fuchsia-600' : ' '} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-fuchsia-600' : ' '} to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex justify-center gap-3">
                <img src={userlogo} alt="" />
                {
                    user ? (
                        <button onClick={handleLogout} className='btn btn-primary px-5'>  Log out </button>
                    ) : (<Link to="/auth/login" className='btn btn-primary px-5'>Login</Link >)
                }

            </div>
        </div>
    );
};

export default Navbar;