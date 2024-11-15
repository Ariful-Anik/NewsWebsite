import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-gray-200 p-2'>
            <p className='bg-[#D72050] text-base-100 px-3 py-2'>Latest</p>
            <Marquee gradient={true} gradientColor='#ffffff' pauseOnHover = {true} className='space-x-10'>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores quae suscipit autem ipsa quod laborum ab, veritatis mollitia quisquam rerum consequatur impedit quidem sint alias explicabo earum magnam ut illum!</Link>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores quae suscipit autem ipsa quod laborum ab, veritatis mollitia quisquam rerum consequatur impedit quidem sint alias explicabo earum magnam ut illum!</Link>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores quae suscipit autem ipsa quod laborum ab, veritatis mollitia quisquam rerum consequatur impedit quidem sint alias explicabo earum magnam ut illum!</Link>
                <Link to='/news'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores quae suscipit autem ipsa quod laborum ab, veritatis mollitia quisquam rerum consequatur impedit quidem sint alias explicabo earum magnam ut illum!</Link>
            </Marquee>

        </div>
    );
};

export default LatestNews;