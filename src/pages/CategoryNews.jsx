
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';
const CategoryNews = () => {
    const { id } = useParams()
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([])
    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data)
            return
        }
        else if (id == '1') {
            const filterNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filterNews)
        }
        else {
            const filterNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filterNews)
        }
    }, [data, id])

    return (
        <div>
            <h3> Total {categoryNews.length} found</h3>
            <div className='grid grid-cols-1'>
                {
                    categoryNews.map(news=> 
                        <NewsCard key={news.id} news={news}></NewsCard>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryNews;