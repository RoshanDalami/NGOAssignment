import React from "react";
import Carousel from "react-bootstrap/Carousel";

import ImageFirst from "../assets/imageFirst.jpg";
import ImageSecond from "../assets/imageSecond.jpg";
import ImageThird from "../assets/imageThird.jpg";
import classes from "./Home.module.css";
function Home() {
  return (
    <>
    <Carousel className={classes.mainFrame}>
      <Carousel.Item className={classes.mainFrame}>
        <img className="d-block w-100" src={ImageFirst} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.mainFrame}>
        <img className="d-block w-100" src={ImageSecond} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.mainFrame}>
        <img className="d-block w-100" src={ImageThird} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  );
}

export default Home;
