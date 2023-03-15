import React from "react";
import classes from "./Gallary.module.css";
import GallaryData from "../Data/GallaryData";
import GallaryCard from "../UI/GallaryCard";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

function Gallary() {
  const gallary = GallaryData.map((data) => {
    return (
      <Link to={"/activities"}>
        {" "}
        <GallaryCard key={uuid()} image={data.image} />{" "}
      </Link>
    );
  });

  return (
    <>
      <h2 className={classes.gallary}>Our Gallary</h2>
      <div className={classes.container}>{gallary}</div>
    </>
  );
}

export default Gallary;
