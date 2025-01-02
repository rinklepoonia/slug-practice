import { BLOG_POST_DATA_LIST } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import Icons from './common/Icons'
import Link from 'next/link'

const BlogCards = () => {
  return (
      <div className='py-20 bg-white'>
          <div className='container max-w-[1248px] mx-auto px-10 shadow-white'>
              <h3 className='font-semibold text-3xl leading-120 text-black pb-8'>All blog posts</h3>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center'>
                  {BLOG_POST_DATA_LIST.map((obj, i) => (
                      <Link href={`/blog/${obj ? obj.title?.toLowerCase()?.replace(/ /g, '-') : '404'}`} key={i} >
                      <div className='border-[2px] border-solid border-pale-grey max-w-[368px] h-[508px] p-6 rounded-lg'>
                          <Image width={320} height={240} sizes='100vw' className='max-w-[320px] h-[240px] object-cover rounded-lg' alt='img' src={obj.image} />
                          <p className='font-semibold text-sm leading-142 text-blue pb-3 pt-8'>{obj.category}</p>
                          
                              <div className='flex items-center justify-between pb-3'>
                              <p className='font-semibold text-2xl leading-133'>{obj.title}</p>
                              <Icons icon={obj.icon} />
                          </div>
                          <p className='font-normal text-base leading-normal text-light-grey'>{obj.description}</p>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
    </div>
  )
}

export default BlogCards;