import React from 'react'
import TeamCard from '../UI/TeamCard'
import TeamData from '../Data/TeamData'
import classes from './Team.module.css'
import uuid from 'react-uuid'
function Team() {
  const team = TeamData.map((team)=>{
    return <TeamCard key={uuid()} image={team.image} title={team.name} position={team.position} />
  })
  return (
    <>
    <div className={classes.main}>
    <h1 className={classes.text}>Our Members</h1>
    <div className={classes.container}>
    {team}
    </div>
    </div>
    
     
    </>
  )
}

export default Team
