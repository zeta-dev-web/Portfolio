import "./Projects.css";
import { Button, Container, Modal } from "react-bootstrap";
import { useState } from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Dashboard Application",
      date: "Mar 2023 - May 2023",
      description:
        "Orchestrated the creation of a sophisticated Dashboard Web Application focused on dynamic data visualization. Seamlessly melded Spring Boot backend functionality with a React frontend and harnessed the capabilities of a PostgreSQL database. Leveraged Spring Boot to efficiently filter data, seamlessly integrating it into the React-based dashboard application. This strategic approach not only facilitated dynamic chart generation but also yielded a 30% reduction in search time and coupled with an impressive 40% boost in overall operational efficiency",
      image:
        "https://github.com/shafa-shabudeen/Dashboard-App-Frontend/blob/main/dashboard-app-preview.png?raw=true",

      tags: ["React Js", "PostgressSQL", "Spring Boot", "Java"],
      category: "fullstack",
      github: "https://github.com/shafa-shabudeen/Dashboard-App-Frontend",
    },
    {
      id: 2,
      title: "Movie Application",
      date: "Jan 2023 - Feb 2023",
      description:
        "Developed a Java-based Movie Web Application that redefined user interaction. Leveraged Spring Boot to streamline movie selection, leading to a 30% reduction in search time and an impressive 40% increase in overall efficiency. The application provided users with an immersive movie browsing experience.",
      image:
        "https://github.com/shafa-shabudeen/MovieFrontEnd/blob/main/app-preview.png?raw=true",
      tags: ["React Js", "MongoDB", "Spring Boot", "Java"],
      category: "fullstack",
      github: "https://github.com/shafa-shabudeen/MovieFrontEnd",
    },
    {
      id: 3,
      title: "TODO List",
      date: "Jun 2023 - Jul 2023",
      description:
        "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
      image:
        "https://github.com/shafa-shabudeen/TODO-List-web/blob/main/To-Do-List.png?raw=true",
      tags: ["HTML", "Css", "JavaScript"],
      category: "frontend",
      github: "https://github.com/shafa-shabudeen/TODO-List-web",
      webapp: "https://shafa-shabudeen.github.io/TODO-List-web/",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      date: "Mar 2023 - Mar 2023",
      description:
        "My personal portfolio website is a showcase of my skills, projects, and experiences in web development. Designed and developed entirely using HTML, CSS, and JavaScript, this responsive website serves as a digital resume and portfolio to highlight my expertise and accomplishments in the field of web development.",
      image:
        "https://github.com/shafa-shabudeen/shafaShabbu.com/blob/main/preview-image.png?raw=true",
      tags: ["HTML", "Css", "JavaScript"],
      category: "frontend",
      github: "https://github.com/shafa-shabudeen/shafaShabbu.com",
      webapp: "https://shafa-shabudeen.github.io/shafaShabbu.com/",
    },
  ];

  const [toggle, setToggle] = useState("all");

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <div className="projects">
      <Container id="projects">
        <div id="Wrapper">
          <h1 id="Title">Projects</h1>
          <div id="ToogleButtonGroup">
            {toggle === "all" ? (
              <Button
                active
                value="all"
                onClick={() => setToggle("all")}
                id="ToogleButton"
              >
                All
              </Button>
            ) : (
              <Button
                value="all"
                onClick={() => setToggle("all")}
                id="ToogleButton"
              >
                All
              </Button>
            )}
            <div className="vr" />
            {toggle === "fullstack" ? (
              <Button
                active
                value="fullstack"
                onClick={() => setToggle("fullstack")}
                id="ToogleButton"
              >
                FULLSTACK'S
              </Button>
            ) : (
              <Button
                value="fullstack"
                onClick={() => setToggle("fullstack")}
                id="ToogleButton"
              >
                FULLSTACK'S
              </Button>
            )}
            <div className="vr" />
            {toggle === "frontend" ? (
              <Button
                active
                value="frontend"
                onClick={() => setToggle("frontend")}
                id="ToogleButton"
              >
                FRONTEND'S
              </Button>
            ) : (
              <Button
                value="frontend"
                onClick={() => setToggle("frontend")}
                id="ToogleButton"
              >
                FRONTEND'S
              </Button>
            )}
            {/* <div className="vr" />
            {toggle === "backend" ? (
              <Button
                active
                value="backend"
                onClick={() => setToggle("backend")}
                id="ToogleButton"
              >
                BACKEND'S
              </Button>
            ) : (
              <Button
                value="backend"
                onClick={() => setToggle("backend")}
                id="ToogleButton"
              >
                BACKEND'S
              </Button>
            )} */}
          </div>
          <div id="CardContainer">
            {toggle === "all" &&
              projects.map((project, index) => (
                <Button onClick={() => handleOpenModal(project)} id="Card">
                  <img id="Image" src={project.image} />
                  <div id="Tags">
                    {project.tags?.map((tag, index) => (
                      <div id="Tag">{tag}</div>
                    ))}
                  </div>
                  <div id="Details">
                    <div id="TagTitle">{project.title}</div>
                    <div id="Date">{project.date}</div>
                    <div id="Description">{project.description}</div>
                  </div>
                </Button>
              ))}
            {projects
              .filter((item) => item.category == toggle)
              .map((project) => (
                <Button onClick={() => handleOpenModal(project)} id="Card">
                  <img id="Image" src={project.image} />
                  <div id="Tags">
                    {project.tags?.map((tag, index) => (
                      <div id="Tag">{tag}</div>
                    ))}
                  </div>
                  <div id="Details">
                    <div id="TagTitle">{project.title}</div>
                    <div id="Date">{project.date}</div>
                    <div id="Description">{project.description}</div>
                  </div>
                </Button>
              ))}
          </div>
        </div>
      </Container>
      {/* Modal for displaying project details */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedProject?.image} alt={selectedProject?.title} id="Image" />
          <p id="Date" style={{marginTop: "10px"}}>{selectedProject?.date}</p>
          <p style={{marginTop: "1rem", marginBottom: "1rem", textAlign: "justify", fontSize: "1.1rem"}}>{selectedProject?.description}</p>
          <div id="Tags">
            {selectedProject?.tags.map((tag, index) => (
              <div id="Tag" key={index}>{tag}</div>
            ))}
          </div>
          <p style={{marginTop: "15px"}}>
            <a href={selectedProject?.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {selectedProject?.webapp && (
            <p style={{display: "inline", marginLeft: "10px"}}>
              <a href={selectedProject?.webapp} target="_blank" rel="noopener noreferrer">Live Page</a>
            </p>
          )}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
} 

export default Projects;
