
import Card from "react-bootstrap/Card";

import classes from "./Card.module.css";

function GallaryCard(props) {

  return (
    <Card className={classes.card}>
      <Card.Img variant="top" src={props.image} className={classes.image} />
    </Card>
  );
}

export default GallaryCard;