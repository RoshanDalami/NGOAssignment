import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ImageFirst from "../assets/imageFirst.jpeg";
import ImageSecond from "../assets/imageSecond.jpeg";
import ImageThird from "../assets/imageThird.jpeg";
import Banner from "../Components/Banner";
import MotiveArea from "../Components/MotiveArea";
import classes from "./Home.module.css";
function Home() {
  return (
    <>
    <Carousel className={classes.mainFrame}>
      <Carousel.Item className={classes.mainFrame}>
        <img className="d-block w-100" src={ImageFirst} alt="First slide" />
        <Carousel.Caption className={classes.caption}>
          <h3>International youth Day</h3>
          <p>Plantation, Sanitation ,Quiz competition with a sweet Welcome program</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.mainFrame}>
        <img className="d-block w-100" src={ImageSecond} alt="Second slide" />

        <Carousel.Caption className={classes.caption}>
          <h3>International youth Day</h3>
          <p>Quiz competiton prize distribution</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.mainFrame}>
        <img className="d-block w-100" src={ImageThird} alt="Third slide" />

        <Carousel.Caption className={classes.caption}>
          <h3>National Festival Hoil 2079</h3>
          <p>
          Holi is a colorful and vibrant festival celebrated in India and other parts of the world by Hindus, as well as people of other religions. It usually falls in late February or early March and is also known as the "Festival of Colors" or the "Festival of Love".
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <MotiveArea/>
    <Banner/>
    
    </>
  );
}

export default Home;
