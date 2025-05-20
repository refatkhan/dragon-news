import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav flex gap-4 text-accent">
                <NavLink className={({ isActive }) => isActive ? 'text-fuchsia-600' : ' '} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-fuchsia-600' : ' '} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-fuchsia-600' : ' '} to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex justify-center gap-3">
                <img src={user} alt="" />
                <button className='btn btn-primary px-5'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;