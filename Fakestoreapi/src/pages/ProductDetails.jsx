import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import  '../scss/product-detail.scss'
import { Grid, Skeleton } from '@mui/material'

import { useSelector } from 'react-redux'

const ProductDetails = () => {

  const darkMode=useSelector((state)=> state.theme.darkMode); 

  const{id} = useParams();
  
  const [singleProduct, setSingleProduct] = useState(null)

  fetch (`https://fakestoreapi.com/products/${id}`)
  .then ((res) => res.json())
  .then((res) => setSingleProduct(res))

  return (
    <div className={darkMode ? "": "active"}>
      <section className="product-detail">
        {singleProduct !== null ? (
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} md={6}>
        <img src={singleProduct.image} alt="" />
      </Grid>

      <Grid item xs={12} lg={6} md={6}>
        <h1>{singleProduct.title}</h1>
        <h5>{singleProduct.description}</h5>
        <h5>{singleProduct.rating.count}AZN</h5>
      </Grid>

      </Grid>
    ):(
      <>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="rectangular" width={210} height={118} />
      </>
    )}
    </section>
  
    </div>

  )
}

export default ProductDetails