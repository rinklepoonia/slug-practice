"use client"
import { BLOG_POST_DATA_LIST } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import Icons from './common/Icons'
import { usePathname } from 'next/navigation';

const Blog = () => {
      const path = usePathname();
      const detail = path.replace(/\/blog\//g, '');
    const filteredBlog = BLOG_POST_DATA_LIST?.filter(obj =>
        obj.title?.toLowerCase()?.replace(/ /g, '-') === detail
      );
  return (
      <div className='container max-w-[1248px] mx-auto'>
          {filteredBlog.map((obj, i) => (
              <div key={i}>
                  <Image sizes='100vw' width={1248} height={516} className='rounded-t-lg object-cover max-w-[1248px] h-[516px] mx-auto' src={obj.image} alt='blog-img' />
                  <div className='pt-12 pb-6 flex items-center gap-3'>
                      <Icons icon="leftArrow"/>
                      <p className='font-semibold text-xl leading-110'>Blog</p>
                  </div>
                  <p className='font-semibold text-3xl leading-126 text-black pb-6'>{obj.title}</p>
                  <p className='font-normal text-lg leading-155 text-light-grey pb-6 max-w-[1074px]'>{obj.description} 
                  </p>
                  <Image sizes='100vw' width={1248} height={516} className='rounded-lg object-cover max-w-[1248px] h-[480px] mx-auto' src={obj.doctorImg} alt='blog-img' />
                  {obj.para.map((para, index) => (
                      <div key={index} className='pt-6'>
                          <p className='font-normal text-lg leading-155 text-light-grey'>{para}</p>
                          
                      </div>
                  ))}
              </div>
          ))}
    </div>
  )
}

export default Blog