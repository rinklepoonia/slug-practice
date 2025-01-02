import ProductDetail from '@/components/ProductDetails'
import React, { Suspense } from 'react'

const page = () => {
  return (
     <Suspense fallback={<div>Loading...</div>}>
            <ProductDetail />
        </Suspense>
  )
}

export default page