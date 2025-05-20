import React from 'react';
import swimmingImage from '../../assets/swimming.png'
import classImage from '../../assets/class.png'
import playground from '../../assets/playground.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h3 className='font-bold mb-5'>This is qzone</h3>
            <div>
                <img src={swimmingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;