import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";

export default function CardLight(props) {
  return (
    <Card className="custom-card bg-dark">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
