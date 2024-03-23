import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsThunk } from '../../store/slices/productSlice';
import ProductCard from "../../reusableComponents/card/card"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./products.css";

export default function Products() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector(state => state.products);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(productsThunk());
      console.log(products);
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="products">
      <Container className="cont2">
        <h1>Products</h1>
        <Row>
          {products?.map((item) => (
            <Col lg="4" key={`product_${item.id}`}>
              <ProductCard
                title={item.title}
                text={item.description}
                image={item.thumbnail}
                cardNumber={item.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
