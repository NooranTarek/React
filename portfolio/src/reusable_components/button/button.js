import React from 'react';
import { Button } from 'react-bootstrap'; 
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './button.css'
export default function CustomButton() {
  return (
    <Button className='button' variant="link">more</Button>
  );
}
