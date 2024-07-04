import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Plutus",
      description: "Named after the greek god of wealth, plutus was our take on gamified financial literacy app, as a part of the 2024 Calgary Hackathon ",
      imgUrl: projImg1,
      link: "https://github.com/yesiamdaniel/calgaryhacks_2024"
    },
    {
      title: "DnD Nearby",
      description: "A social media app, where a niche comunity can come to form groups and socialize with likeminded people ",
      imgUrl: projImg2,
      link: "https://github.com/KarlWinkler/DnD_Nearby"
    },
    {
      title: "Retail Renissance",
      description: "A database mangement app, where hardware stores can easily track their shipements, orders, quanities, across multiple stores.",
      imgUrl: projImg3,
      link: "https://github.com/desobob11/RetailRenaissance"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p> Here, you will find a collection of my personal and academic projects. Each project reflects my journey in software development, demonstrating my skills in Python, JavaScript, and more. Browse through the categories to explore my work, ranging from web development to data analysis and beyond.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Python</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Java/JS</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Projects related to Python.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Projects related to Java and JavaScript.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
