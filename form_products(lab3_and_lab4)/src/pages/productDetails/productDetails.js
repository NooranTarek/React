import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import ProductCard from "../../reusableComponents/card/card";
import './productDetails.css';

export default function ProductDetails() {
  const { cardNumber } = useParams();
  const products = useSelector((state) => state.products.products); 
  const selectedItem = products.find(product => product.id === +cardNumber); 
  return (
    <div className='productDetailsCard'>
      <ProductCard
        title={selectedItem.title}
        text={selectedItem.description}
        image={selectedItem.thumbnail}
        cardNumber={selectedItem.id}
      />
    </div>
  );
}
