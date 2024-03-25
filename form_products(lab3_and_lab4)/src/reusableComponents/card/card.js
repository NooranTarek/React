import React from "react";
import { Card } from "react-bootstrap";
import ProductButton from '../button/Button'
import { Link } from "react-router-dom";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./card.css";

export default function CardLight(props) {
    const variant="warning";
    const content="more details"
  return (
    <Card className={`custom-card ${props.cardNumber % 2 === 0 ? 'even' : 'odd'}`} style={{ height: "100%" }}>
      <Card.Img variant="top" src={props.image} style={{ height: "50%" }} />
      <Card.Body style={{ height: "30%" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Link to={`/products/${props.cardNumber}`}><ProductButton variant={variant} content={content}></ProductButton></Link>
      </Card.Body>
    </Card>
  );
}
//add key to diffrentiate buttons