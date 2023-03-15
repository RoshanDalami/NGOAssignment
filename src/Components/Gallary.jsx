import React from 'react'
import classes from './Gallary.module.css'
import GallaryData from '../Data/GallaryData'
import GallaryCard from '../UI/GallaryCard'
import { Link } from 'react-router-dom'

function Gallary(props) {

const gallary = GallaryData.map((data)=>{
    return <Link to={'/activities'}> <GallaryCard  image={data.image}/> </Link>
})

  return (
    <>
    <h2 className={classes.gallary}>Gallary</h2>
      <div className={classes.container} >
      
{gallary}
      </div>
    </>
  )
}

export default Gallary
