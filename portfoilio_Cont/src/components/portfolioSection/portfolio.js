import React from "react";
import CardLight from "../../reusable_components/card/card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./portfolio.css";

export default function Portfolio() {
  const portfolioItems = [
    {
      cardNumber: 1,
      title: "MEAN STACK",
      text: "The MEAN stack is a JavaScript-based framework for developing web applications. MEAN is named after MongoDB, Express, Angular, and Node, the four key technologies that make up the layers of the stack. MongoDB — document database. Express(.js) — Node.js web framework. Angular(.js) — a client-side JavaScript framework."
    },
    {
      cardNumber: 2,
      title: "MERN STACK",
      text: "What is the MERN stack? The MERN stack is a web development framework made up of the stack of MongoDB, Express, React.js, and Node.js. It is one of the several variants of the MEAN stack.."
    },
    {
      cardNumber: 3,
      title: "PHP LARAVEL",
      text: "Laravel is an easy-to-use web framework that will help you create extensible PHP-based websites and web applications at scale. Before creating a web app or website, you need to make a foundational decision as to what technology you are going to use."
    },
    {
      cardNumber: 4,
      title: "PYTHON",
      text: "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isnt specialized for any specific problems"
    },
    {
      cardNumber: 5,
      title: "MACHINE LEARNING",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
    },
    {
      cardNumber: 6,
      title: "ANDROID",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
    }
  ];

  // const rows = [];
  // for (let i = 0; i < portfolioItems.length; i += 3) {
  //   rows.push(portfolioItems.slice(i, i + 3));
  // }

  return (
    <div className="portfoilio">
      <Container className="cont2">
        <h1>Portfolio</h1>
          <Row>
            {portfolioItems.map((item) => (
              <Col lg="4">
                <CardLight
                  cardNumber={item.cardNumber}
                  title={item.title}
                  text={item.text}
                />
              </Col>
            ))}
          </Row>
      </Container>
    </div>
  );
}
