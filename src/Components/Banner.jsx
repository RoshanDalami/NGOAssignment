import React from 'react'
import classes from './Banner.module.css'

import BannerCard from '../UI/BannerCard'
import BannerData from '../Data/BannerData'
import uuid from 'react-uuid'


function Banner() {
    const bannerItems = BannerData.map((data)=>{
        return <BannerCard key={uuid()} image={data.image} title={data.title}/>
    })
  return (
    <>
      <div className={classes.container}>
      {bannerItems}
      </div>
    </>
  )
}

export default Banner
