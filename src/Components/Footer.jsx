import React from 'react'
import classes from './Footer.module.css'
import Logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className={classes.container}>
      <section className={classes.left}>
          <img src={Logo} alt="" className={classes.image}/>
          <h3 className={classes.name}>Support Umbrella Nepal</h3>
      </section>
      <section className={classes.right}>
      <div className={classes.motive}>
      <Link to={'/about'}>
      <h3 className={classes.head}>What We Do?</h3>
      </Link>
       
        <p className={classes.item}>Youth Training Workshop</p>
        <p className={classes.item}>Women Health Campaign</p>
        <p className={classes.item}>Environment Improvement</p>
        <p className={classes.item}>Disaster Rescue</p>
      </div>
      <div className={classes.motive}>
        <Link to={'/activities'}> <h3 className={classes.head}>Our Activities</h3></Link>
        <p className={classes.item}>Conduct Volunterring Workshop</p>
        <p className={classes.item}>Sustainable Development Goal</p>
        <p className={classes.item}>Environment Improvement Program</p>
        <p className={classes.item}>Youth Development Program</p>
      </div>
      <div className={classes.motive}>
        <h3 className={classes.head}>Our Motive</h3>
        <p className={classes.item}>Women Enpowerment</p>
        <p className={classes.item}>Women Enpowerment</p>
        <p className={classes.item}>Women Enpowerment</p>
        <p className={classes.item}>Women Enpowerment</p>
      </div>

      

      </section>
    </div>

    </>
  )
}

export default Footer
