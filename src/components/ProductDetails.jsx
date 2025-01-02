"use client"
import React, { useState } from 'react';
import productData, { PRODUCT_DATA_LIST } from '../utils/helper';
import Image from 'next/image';
import Icons from './common/Icons';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const ProductDetail = () => {
  const searchParams = useSearchParams();
  const titleParam = searchParams.get('title');
  const filteredProduct = PRODUCT_DATA_LIST?.filter(obj =>
    obj.title?.toLowerCase()?.replace(/ /g, '-') === titleParam
  );
  const [count, setCount] = useState(1);
  const [currentImage, setCurrentImage] = useState(filteredProduct[0].image || '');
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="max-w-[1180px] px-5 mx-auto">
      <div className='flex'>
        {filteredProduct.map((obj, i) => (
          <div key={i} className='flex max-xl:flex-wrap justify-center gap-[70px]'>
            <div className='flex max-lg:flex-wrap items-center gap-[30px] max-lg:justify-center'>
              <div className='max-md:flex items-center gap-4 flex-wrap justify-center'>
                {obj.smallImages.map((image, index) => (
                  <div key={index} className='w-[170px] h-[138px] rounded bg-light-white mt-3 flex items-center justify-center '>
                    <Image width={121} height={114} src={image} onClick={() => setCurrentImage(image)} alt={`Image ${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className='bg-light-white w-[500px] h-[600px] flex justify-center items-center rounded'>
                <Image
                  width={446}
                  height={335}
                  className="max-w-[446px] h-[335px] object-cover"
                  src={currentImage}
                  alt="Big Display"
                />
              </div>
            </div>
            <div>
              <p className='font-semibold text-2xl leading-100 text-black pb-4'>{obj.title}</p>
              <div className='flex items-center gap-4 pb-4'>
                <Image width={100} height={20} className='max-w-[100px] h-5 object-cover' src={obj.ratingStar} alt='star' />
                <p className='font-normal text-sm leading-normal text-black text-opacity-50'>{obj.rating}</p>
                <div className='h-4 w-1 bg-black opacity-50 '></div>
                <p className={`font-normal text-sm leading-normal ${obj.stock === 'In Stock' ? 'text-light-green' : 'text-red-500'}`}>
                  {obj.stock}
                </p>
              </div>
              <p className='font-normal text-2xl leading-100 text-black pb-6'>{obj.price}</p>
              <p className='font-normal text-sm leading-normal text-black max-w-[373px] pb-6'>{obj.description}</p>
              <div className='w-[400px] h-[1px] bg-black'></div>
              <div className='flex items-center gap-6 pt-6'>
                <p className='font-normal text-xl leading-100 text-black'>Colours:</p>
                <div className='flex items-center gap-2'>
                  <div className='size-5 bg-grey rounded-full'></div>
                  <div className='size-5 bg-light-red rounded-full'></div>
                </div>
              </div>
              <div className='flex items-center gap-6 pt-6'>
                <p className='font-normal text-xl leading-100 text-black'>Size:</p>
                <div className='flex items-center gap-4'>
                  {obj.sizes.map((size, index) => (
                    <div key={index} className='border border-solid border-black border-opacity-50 rounded size-8 flex items-center justify-center'>
                      <p className=' font-medium text-sm leading-normal text-black'>{size.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 items-center mt-6">
                <div className="flex items-center gap-2 ">
                  <div className="size-5 bg-white border border-black border-opacity-50 flex justify-center items-center rounded duration-300 ease-linear transition-all group hover:bg-off-blue hover:border-off-blue hover:border-opacity-0">
                    <Icons className='cursor-pointer ' onClick={decrement} icon='minusIcon' />
                  </div>
                  <div className="w-[40px] border border-black border-opacity-50 flex justify-center items-center rounded-lg py-2">
                    {count}
                  </div>
                  <div className="size-5 bg-white border border-black border-opacity-50 flex justify-center items-center rounded duration-300 ease-linear transition-all group hover:bg-off-blue hover:border-off-blue hover:border-opacity-0">
                    <Icons className='cursor-pointer ' onClick={increment} icon='plusIcon' />
                  </div>
                </div>
                <button className='bg-off-blue font-medium text-base leading-150 text-white py-[10px] px-12 rounded duration-300 ease-linear transition-all border border-transparent hover:bg-white hover:border-off-blue hover:text-off-blue'>Buy Now</button>
                <div className="size-[40px] border border-black border-opacity-50 rounded flex justify-center items-center cursor-pointer">
                  <Icons icon='favorite' />
                </div>
              </div>
              <div className="max-w-[400px] w-full rounded border border-black border-opacity-50 mt-10 ">
                <div className="flex gap-5 pt-6 px-4">
                  <Image
                    src='/assets/images/svg/free-delivery.svg'
                    width={40}
                    height={40}
                    alt='delivery'
                  />
                  <div className="mt-0">
                    {obj.delivery.freeDelivery ? (
                      <p className="text-black font-medium text-base leading-150">Free Delivery</p>
                    ) : (
                      <p className="text-black font-medium text-base leading-150">Delivery chargers will be according to the product</p>
                    )}
                    <p className='font-medium text-xs leading-150 text-black underline underline-offset-4 mt-2'>{obj.delivery.deliveryMessage}</p>
                  </div>
                </div>
                <div className="border border-black border-opacity-50 mt-4"></div>
                <div className="flex gap-5 pt-4 px-4 pb-6">
                  <Image
                    src='/assets/images/svg/return.svg'
                    width={40}
                    height={40}
                    alt='return'
                  />
                  <div className="mt-0">
                    {obj.delivery.freeDelivery ? (
                      <p className="text-black font-medium text-base leading-150">Free Delivery</p>
                    ) : (
                      <p className="text-black font-medium text-base leading-150">Delivery chargers will be according to the product</p>
                    )}
                    <p className='font-medium text-xs leading-150 text-black mt-2'>{obj.delivery.returnPolicy}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
