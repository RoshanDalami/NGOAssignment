import React from 'react'
import classes from './President.module.css'
import PresidentImage from '../assets/president.jpeg'
function President() {
    const detail = {
        name : 'NARESH RIJAL',
        desc : "Lorem ipsum dolor. ",
        phone : '+977 9804470949'
    }
  return (
    <>
    <div className={classes.container}>
        <section className={classes.right} >
        <img src={PresidentImage} className={classes.image} alt="" />
        </section>
        <section className={classes.detail}>
        <h1 className={classes.main}>President</h1>
        <div className={classes.inner}>
        <h3>Name : {detail.name}</h3>
            &nbsp;
            <h4>Tel : { detail.phone}</h4>
        </div>
            
        </section>
    </div>
      
    </>
  )
}

export default President
