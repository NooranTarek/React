import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Progress from '../../reusable_components/progress/progress';
import './skills.css';

export default function Skills() {
  const skills = [
    { name: 'REACT', value: 5 },
    { name: 'ANGULAR', value: 8 },
    { name: 'Javascript', value: 9 },
    { name: 'NODE JS', value: 9 },
    { name: 'XML', value: 5 }
  ];

  return (
    <div className="skills mt-4 bg-dark text-light pt-4 pb-4">
      <Container>
        <div className="text-center">
          <h2>Skills</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing
          </p>
          {skills.map((skill, index) => (
            <Fragment key={`skills_${index}`}>
              <Row className="mt-3">
                <Col>
                  <h4>{skill.name}</h4>
                </Col>
                <Col>
                  <Progress value={skill.value} />
                </Col>
              </Row>
            </Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
}
