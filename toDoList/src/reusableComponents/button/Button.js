import React from 'react';
import { Button } from 'react-bootstrap'; 
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function ReusableButton({ onClick, content, variant, size }) {
    return (
      <Button onClick={onClick} variant={variant} size={size}>
        {content}
      </Button>
    );
}
