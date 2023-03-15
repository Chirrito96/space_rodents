import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pokemon.jpg";
import projImg2 from "../assets/img/rick.jpg";
import projImg3 from "../assets/img/projImg3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Fit U App",
      description: "Web app for coaches and individuals who want to acquire nutritional and training plans",
      imgUrl: projImg3,
      link:"https://final-henry-g6.netlify.app/"
    },
    {
      title: "Pokemon App",
      description: "Web app that allows searching, creating, editing, and deleting (CRUD) Pokémon by utilizing the Pokémon API and a database.",
      imgUrl: projImg1,
      link:"https://pi-pokemon.pages.dev/"
    },
    {
      title: "Rick & Morty App",
      description: "Web app that allows searching for Rick & Morty characters by ID and adding them to the favorites section.",
      imgUrl: projImg2,
      link:"https://rick-and-morty-app.pages.dev//"
    },
   
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About me</h2>
                  <p>I am Oscar Alatrista Zegarra, a talented and committed Junior Full Stack Developer with soft skills such as effective communication, proactivity, teamwork, and empathy.
                    <br></br>
                  
                    I could say a lot about life and how tough it is, but as I have been demonstrating, it doesn't matter how hard life hits you, but how willing you are to move forward despite it. My values training such as discipline, leadership, teamwork, and indomitable spirit commit me to continue in constant learning and continuous improvement in Tech and Soft Skills, being a great contribution to any organization that entrusts me with their confidence as a collaborator. You can contact me through my email oalatrista@gmail.com or through my LinkedIn profile at www.linkedin.com/in/oscar-alatrista. I am excited to apply my skills and knowledge to a Tech industry company.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Certifications & courses </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Resume</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
  )
}
