import React from 'react'
import classes from './TeamCard.module.css'
function TeamCard(props) {
  return (
    <>
      <div className={classes.wrapper}>
      <img src={props.image} alt="" className={classes.image}/>
      
        <h3 className={classes.title}>
            {props.title}
        </h3>
        <p className={classes.para}>{props.position}</p>

      </div>
    </>
  )
}

export default TeamCard
