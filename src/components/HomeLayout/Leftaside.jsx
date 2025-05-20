import React, { Suspense } from 'react';
import Categories from '../Categories';

const Leftaside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
                < Categories />
          </Suspense >
        </div >
    );
};

export default Leftaside;