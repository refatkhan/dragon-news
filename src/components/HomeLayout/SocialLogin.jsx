import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h3>LogIn with</h3>
            <div className='space-y-2'>
                <button className='btn w-full btn-outline btn-primary'><FcGoogle size={20} />Log IN with Google </button>
                <button className='btn w-full btn-outline btn-secondary'><FaGithub size={20} />
                    Log in with github </button>
            </div>
        </div>
    );
};

export default SocialLogin;