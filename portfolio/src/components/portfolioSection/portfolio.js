import React from 'react'
import LightCard from '../../reusable_components/lightCard/lightCard' 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import './portfolio.css'
export default function Portfolio() {
    return(
        <div className="portfoilio">
            <h1>Portfolio</h1>
            <Container>
                <Row>
                    <Col>
                        <LightCard title='MEAN STACK' />
                    </Col>
                    <Col>
                        <LightCard title='MEARN STACK' />
                    </Col>
                    <Col>
                        <LightCard title="PHP LARAVEL" />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <LightCard title='PYTHON' />
                    </Col>
                    <Col>
                        <LightCard title='MACHINE LEARNING' />
                    </Col>
                    <Col>
                        <LightCard title="ANDROID" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
