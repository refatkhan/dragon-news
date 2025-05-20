import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2>Find Us On</h2>
            <div className="join join-vertical w-full">
                <button
                    className="btn bg-base-100 justify-start join-item text-accent "
                > <FaTwitter size={20} /> Twitter</button>
                <button className="btn bg-base-100 justify-start join-item text-accent "><FaFacebook size={20} /> Facebook</button>
                <button className="btn bg-base-100 justify-start join-item text-accent"> <FaInstagram size={20} /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;