import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Progress from '../../reusable_components/progress/progress'
import './skills.css';


export default function Skills() {
    return(
        <div className="skills mt-4 bg-dark text-light pt-4 pb-4">
        <Container>
           <div className="text-center">
            <h2>Skills</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            </p>
            <Row className="mt-3">
                <Col>
                    <h4>REACT</h4>
                </Col>
                <Col>
                    <Progress value={5} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <h4>ANGULAR</h4>
                </Col>
                <Col>
                    <Progress value={8} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <h4>Javascript</h4>
                </Col>
                <Col>
                    <Progress value={9} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <h4>NODE JS</h4>
                </Col>
                <Col>
                    <Progress value={9} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <h4>XML</h4>
                </Col>
                <Col>
                    <Progress value={5} />
                </Col>
            </Row>
           </div>
        </Container>
        </div>
    )
}
