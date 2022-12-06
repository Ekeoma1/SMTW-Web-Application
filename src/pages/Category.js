import React, {useEffect} from 'react'
import Hero from '../components/Category/Hero'
import '../assets/css/category.css'
import ProductListing from '../components/Category/ProductListing'

const Category = () => {
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return (
    <div>
        <Hero/>
        <ProductListing/>
    </div>
  )
}

export default Category
