import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ProductButton({ variant, content, onClick }) {
  return (
    <Button variant={variant} onClick={onClick}>{content}</Button>
  );
}
