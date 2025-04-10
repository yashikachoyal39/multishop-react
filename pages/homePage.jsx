import React from 'react'
import Carrousel from '../components/carousel'
import Featured from '../components/featured'
import Category from '../components/category'
import Products from '../components/products'
import Offers from '../components/offers'
import Venders from '../components/venders'

export default function Home({productData, categories}) {
    return (
        <>
            <Carrousel />
            <Featured />
            <Category categories={categories}/>
            <Products productData={productData?.slice(0,12)}/>
            <Offers />
            <Products productData={productData?.slice(12,24)}/>
            <Venders />
        </>
    )
}
