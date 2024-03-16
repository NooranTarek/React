import React from 'react'
import Card from 'react-bootstrap/Card'
export default function LightCard(props) {
  return (
    <Card>
                <h2>{props.title}</h2>
                <p>development track</p>
    </Card>
    )
}
