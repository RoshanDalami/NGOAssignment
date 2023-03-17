import React from 'react'
import classes from './BannerCard.module.css'
function BannerCard(props) {
  return (
    <>
      <div className={classes.wrapper}>
      <img src={props.image} alt="" className={classes.image}/>
      
        <h3 className={classes.title}>
            {props.title}
        </h3>
        

      </div>
    </>
  )
}

export default BannerCard
