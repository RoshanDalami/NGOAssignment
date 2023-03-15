import { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import classes from "./Card.module.css";

function BasicCard(props) {
  const [button, setButton] = useState(false);
  const buttonHandler = () => {
    setButton(curState=>!curState)
  };
  return (
    <Card className={classes.card}>
      <Card.Img variant="top" src={props.image} className={classes.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {button && <Card.Text>{props.description}</Card.Text>}
        <Button variant="primary" onClick={buttonHandler}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
