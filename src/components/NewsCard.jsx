import React from 'react';
import { FaStar, FaRegEye, FaShareAlt, FaBookmark } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        published_date,
        details,
        rating,
        total_view,
    } = news;

    const formattedDate = new Date(news.author.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className=" rounded-md shadow space-y-4 my-5">
            {/* Author & Date */}
            <div className="flex justify-between items-center bg-base-200 p-5">
                <div className="flex items-center gap-3">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                        <h4 className="font-semibold">{author.name}</h4>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700 flex gap-4">
                    <FaBookmark />
                    <FaShareAlt />
                </button>
            </div>

            <div className='px-5 space-y-5'>
                {/* Title */}
                <h2 className="text-lg font-bold">{title}</h2>

                {/* Image */}
                <img src={image_url} alt={title} className="w-full h-56 object-cover rounded" />

                {/* Details */}
                <p className="text-sm text-gray-600">
                    {details.slice(0, 200)}...
                    <span className="text-orange-600 font-medium cursor-pointer"> Read More</span>
                </p>

                {/* Footer - Rating and Views */}
                <div className="flex justify-between items-center border-t pt-3">
                    <div className="flex items-center text-orange-500 gap-1">
                        {Array.from({ length: rating.number }).map((_, i) => (
                            <FaStar key={i} />
                        ))}
                        <span className="ml-2 text-gray-800">{rating.number.toFixed(1)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                        <FaRegEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
