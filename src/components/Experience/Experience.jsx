import React from "react";
import { Container, Stack, Row, Col} from "react-bootstrap";
import "./Experience.css";
import "./Timeline.css";
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";

const experiences = [
  {
    role: "Java Educator",
    company: "TechGen",
    img: "techgen-logo.jpg",
    date: "08/2023-Present",
    endDate: "Present",
    skills: ["Core Java", "Advance Java", "Java Server Pages","Java Swing","Java Database Connectivity"],
    description: [
      "Instructed Core and Advanced Java, achieving a 95% pass rate in both courses among a diverse student group of 20+ students",
      "Implemented interactive learning through practical sessions and hands-on exercises, resulting in a 15% increase in average project scores",
      "Delivered engaging and effective classes in English, consistently receiving positive student reviews with an average rating of 4.8 out of 5",
      "Employed personalized teaching methods based on individual student assessments, leading to a 20% reduction in student learning gaps",
      "Provided mentorship and guidance, resulting in 60% of students securing Java-related internships",
    ],
  },
  {
    role: "Java Developer Intern",
    company: "Hulk Hire Tech",
    img: "HulkHire-logo.png",
    date: "09/2023",
    endDate: "11/2023",
    skills: ["Core Java", "Advance Java", "APIs", "MicroServices", "Postman", "Trustly Integration"],
    description: [
      "Integrated Trustly Payment Solution into an e-commerce app as part of an intern role, enhancing the payment experience",
      "Used Java technologies like MongoDB and Spring Boot for integration, leading to a 30% increase in conversion rates and a 20% reduction in cart abandonment",
      "Developed Trustly Payment integration using Java, MongoDB, and Spring Boot",
      "Designed secure APIs for seamless communication",
    ],
  },
  {
    role: "Java Programming Intern",
    company: "InternPe",
    img: "Internpe-logo.jpg",
    date: "09/2023",
    endDate: "11/2023",
    skills: ["Basics of Java","OOPs"],
    description: [
      "Acquired foundational understanding of Java syntax, data types, control structures, and basic input/output operations.",
      "Demonstrated proficiency in creating and using classes, objects, methods, and constructors to encapsulate and organize code.",
      "Applied fundamental Java concepts like inheritance, polymorphism, encapsulation, and abstraction to solve programming problems."
    ],
  },
];

const TimelineItem = ({ isPresent }) => (
  <div className="timeline-item">
    <div className={`timeline-dot ${isPresent ? "filled" : ""}`}></div>
    <div className="timeline-content"></div>
  </div>
);


function Experience() {
  return (
    <Container id="experience">
      <h1 id="subtitle">Experience</h1>
      <Stack gap={3} id="stack">
        {experiences.map((experience, index) => (
          <Row key={index}>
            <Col xs={2} id="timeline">
              <TimelineItem isPresent={experience.endDate === "Present"} />
            </Col>
            <Col>
              <div className="Card">
                <div className="Top">
                  <img src={`./${experience.img}`} alt={experience.role} />
                  <div className="Body">
                    <div className="Role">{experience.role}</div>
                    <div className="Company">{experience.company}</div>
                    <div className="Date">{experience.date}</div>
                  </div>
                </div>
                <div className="Description">
                  <span>
                  {experience?.description && (
                    <ul className="DescriptionList">
                      {experience.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  )}
                  </span>
                  {experience?.skills && (
                    <>
                      <br />
                      <div className="Skills">
                        <b>Skills:</b>
                        <div className="ItemWrapper">
  {experience?.skills?.map((skill, index) => (
    <div key={index} className="Skill">
      <FontAwesomeIcon icon={faCircleDot} className="Icon" /> {skill}
    </div>
  ))}
</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Stack>
    </Container>
  );
}

export default Experience;
