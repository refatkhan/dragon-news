import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams()
    return (
        <div>
            <h3>categoryNews {id}</h3> 
        </div>
    );
};

export default CategoryNews;