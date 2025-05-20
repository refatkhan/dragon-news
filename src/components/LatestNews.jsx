import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <>
            <div className='flex gap-5 items-center bg-base-200 p-3'>

                <h2 className='text-base-100 bg-secondary p-3 '> latest</h2>
                <Marquee className='flex gap-4' pauseOnHover={true}>
                    <p className='font-bold'>Lorem ipsum dolor sit amet.</p>
                    <p className='font-bold'>Lorem ipsum dolor sit amet.</p>
                    <p className='font-bold'>Lorem ipsum dolor sit amet.</p>
                    <p className='font-bold'>Lorem ipsum dolor sit amet.</p>
                    <p className='font-bold'>Lorem ipsum dolor sit amet.</p>
                </Marquee>

            </div>
        </>
    );
};

export default LatestNews;