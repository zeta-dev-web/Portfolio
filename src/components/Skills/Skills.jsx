import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Skills.css";

const skillsData = [
  { image: "Java.png", name: "Java" },
  { image: "HTML5.png", name: "HTML5" },
  { image: "css.png", name: "CSS3" },
  { image: "react.jpg", name: "React" },
  { image: "js.png", name: "JavaScript" },
  { image: "Spring Boot.png", name: "Spring Boot" },
  { image: "git.png", name: "Git" },
  { image: "github.png", name: "GitHub" },
  { image: "mongodb.jpg", name: "MongoDB" },
  { image: "mysql.png", name: "MySQL" },
  { image: "postman.png", name: "Postman" },

];

function Skills() {
  return (
    <Container className="d-flex">
      <div id="skills">
        <h1 id="subtitle">Skills</h1>
        <Row xs={1} md={3} lg={4} className="g-4 d-flex ms-4">
          {skillsData.map((skill, index) => (
            <Col key={index}>
              <Card className="skill-card">
                <Card.Body>
                  <img src={skill.image} alt={skill.name} className="skill-image" />
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Skills;
