import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import RightAside from '../components/HomeLayout/RightAside'
import { useLoaderData, useParams } from 'react-router';
import NewsDeailsCard from '../components/NewsDeailsCard';
const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news , setNews] = useState({})
    useEffect(()=>{
        const NewsDetails = data.find((singlenews)=> singlenews.id == id);
        setNews(NewsDetails);
    }, [data,id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold '>News details</h2>
                    <NewsDeailsCard news={news}></NewsDeailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;