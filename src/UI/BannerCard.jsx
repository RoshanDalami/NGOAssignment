import React from 'react'
import classes from './BannerCard.module.css'
function BannerCard(props) {
  return (
    <>
    
      <div className={classes.wrapper}>
      <img src={props.image} alt="" className={classes.image}/>
      </div>
    </>
  )
}

export default BannerCard
