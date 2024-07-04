import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Plutus from "../assets/images/Plutus.png";
import DnDNearby from "../assets/images/DnDNearby.png"; 
import RetailRenaissance from "../assets/images/RetailRenissance.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Plutus",
      description: "Named after the greek god of wealth, Plutus was our take on gamified financial literacy app, as a part of the 2024 Calgary Hackathon",
      imgUrl: Plutus,
      link: "https://devpost.com/software/plutus-lmxpih"
    },
    {
      title: "DnD Nearby",
      description: "A social media app, where a niche community can come to form groups and socialize with likeminded people",
      imgUrl: DnDNearby, 
      link: "https://github.com/KarlWinkler/DnD_Nearby"
    },
    {
      title: "Retail Renaissance",
      description: "A database management app, where hardware stores can easily track their shipments, orders, quantities, users and customers across multiple stores.",
      imgUrl: RetailRenaissance,
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
                  <p>Here, you will find a collection of my personal and academic projects. Each project reflects my journey in software development, demonstrating my skills in Python, JavaScript, SQL and more. My work, ranges from web development to data analysis and beyond. Stay tuned for more!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
