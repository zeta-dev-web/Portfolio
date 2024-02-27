import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function About() {
  return (
    <div id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="order-2 order-md-1">
            <div id="title">
              Hola, Soy
              <br /> Leonardo Zamorano
            </div>
            <div id="textLoop">
              Y soy{" "}
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "Backend Developer",
                      "Full Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div id="subTitle">
              Tambien se me conoce como ZetaDev, soy una persona altamente motivada y
              adaptable que se enfrenta con entusiasmo a cualquier de
              desafíos. <br />
              Mi constante deseo de aprender y mi habilidad para trabajar de
              manera colaborativa me caracterizan.
              <br />
              Con una profunda pasión por las tecnologías y el desarrollo web,
              me destaco por mi creatividad y dedicación. <br />
              Poseo grandes ideas y una firme compromiso para ofrecer resultados
              de calidad. <br />
              Estoy emocionado por contribuir al mundo del desarrollo y seguir
              creciendo en este apasionante campo.
            </div>
            <div id="SocialMediaIcons">
              <a
                id="SocialMediaIcon"
                href="https://www.linkedin.com/in/shafa-shabudeen/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                id="SocialMediaIcon"
                href="https://github.com/shafa-shabudeen"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a id="SocialMediaIcon" href="mailto:shafashabbu@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </Col>
          <Col
            md={5}
            className="d-flex justify-content-md-end order-1 order-md-2 mt-md-0 mt-3"
          >
            <div id="heroContainer">
              <img src="./profile.jpg" alt="hero image" id="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
