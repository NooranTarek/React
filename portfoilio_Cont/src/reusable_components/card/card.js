import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./card.css";

export default function CardLight(props) {
  // const [cardColor, setCardColor] = useState("");

  
  // const changeCardColor = () => {
  //   if (props.cardNumber % 2 === 0) {
  //     setCardColor("bg-dark text-white");
  //   } else {
  //     setCardColor("bg-light text-dark");
  //   }
  // };
  
  // useEffect(() => {
  //   changeCardColor();
  // }, [props.cardNumber]);
  
  return (
    <Card className={` custom-card  ${props.cardNumber %2 === 0 ? 'even' : 'odd'}`}>
      <Card.Body>
        <Card.Text>{props.cardNumber}</Card.Text>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
