import React from "react";
import BasicCard from "../UI/Card";
import classes from './Activites.module.css'
import Data from "../Data/Data";
import uuid from "react-uuid";
function Activities() {
  const items = Data.map((data)=>{
    return <BasicCard key={uuid()} image={data.image} title={data.title} description={data.Description}/>
  })
  return (
    <>
     <h1>Our Activities</h1>
      <div className={classes.cards}>
     
        {items}
      </div>
    </>
  );
}

export default Activities;
