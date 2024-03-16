import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

import './aboutme.css';

export default function Aboutme() {
    return (
        <section className="about-me-section">
            <h1>About  me </h1>
          <Container className='cont'>
            <Row>
              <Col md={6}>
                <h2>Education</h2>
                <p className='p1'>I graduated from FCAI  Helwan University with a degree in Computer Science.</p>
              </Col>
              <Col md={6}>
                <h2>Experience</h2>
                <p className='p2'>I have studied as a software engineer at ITI for 9 Months.</p>
              </Col>
            </Row>
          </Container>
        </section>
      );
}
