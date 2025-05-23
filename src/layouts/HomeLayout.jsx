import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import Leftaside from '../components/HomeLayout/Leftaside';
import RightAside from '../components/HomeLayout/RightAside';
import FindUs from '../components/HomeLayout/FindUs';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header/>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar/>
                </nav>
            </header>

            <main className='w-11/12 mx-auto gap-5 my-3 grid grid-cols-12'>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <Leftaside></Leftaside>
                </aside>
                <section className="main col-span-6 ">
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3 sticky top-2 h-fit'>
                    <RightAside>
                        
                    </RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;