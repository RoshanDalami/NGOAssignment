import React from 'react'
import classes from './Button.module.css'
function Button() {
  return (
    <div className={classes.button}>
    <button type='submit' className={classes.btn} >ADD TO CART</button>
</div>
  )
}

export default Button