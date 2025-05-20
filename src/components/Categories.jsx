import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json")
    .then(res => res.json())
const Categories = () => {
    const categories = use(categoryPromise);

    return (
        <div>
            <h2 className="font-bold">All Categories ({categories.length})</h2>
            <div className='flex-col flex mt-4 gap-2'>
                {
                    categories.map((category) =>
                        <NavLink
                            className="btn bg-base-100 border-0 hover:bg-base-200 font-semibold"
                            key={category.id}
                            to={ `/category/${category.id}`}
                        >{category.name}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;