import React from "react";
import classes from "./Gallery.module.css";
import GalleryData from "../Data/GalleryData";
import GalleryCard from "../UI/GalleryCard";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

function Gallery() {
  const gallery = GalleryData.map((data) => {
    return (
      <Link to={"/activities"}>
        {" "}
        <GalleryCard key={uuid()} image={data.image} />{" "}
      </Link>
    );
  });

  return (
    <>
    
      <h2 className={classes.gallery}>Our Gallery</h2>
      <div className={classes.container}>{gallery}</div>
    </>
  );
}

export default Gallery;
