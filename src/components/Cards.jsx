import { CARDS_DATA_LIST, PRODUCT_DATA_LIST } from '@/utils/helper'
import Link from 'next/link';
import React from 'react'

const Cards = () => {
    return (
        <div className='py-40'>
            <div className='container max-w-[1140px] mx-auto px-3'>
                {PRODUCT_DATA_LIST.map((obj, i) => (
                    <Link key={i} href={{
                        pathname: '/product',
                        query: { title: obj.title?.toLowerCase()?.replace(/ /g, '-') || '404' }
                    }}>
                    <div  className='border border-solid border-black max-w-[300px] mt-5'>
                        <p className='font-bold text-lg leading-normal text-black'>{obj.title}</p>
                        <p className='font-bold text-lg leading-normal text-black'>{obj.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Cards