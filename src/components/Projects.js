import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pokemon.jpg";
import projImg2 from "../assets/img/rick.jpg";
import projImg3 from "../assets/img/projImg3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cv from "../assets/cv.pdf"
import { Document, Page, pdfjs } from "react-pdf";
import { saveAs } from 'file-saver';
import LinkedInCertifications from "./LinkedinCert";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




export const Projects = () => {

  const downloadPdf = () => {
    const pdfUrl = '/cv.pdf';
    const pdfName = 'Resume Oscar Alatrista';
    saveAs(pdfUrl, pdfName);
  }
  const projects = [
    {
      title: "Fit U App",
      description: "Web app for coaches and individuals who want to acquire nutritional and training plans",
      imgUrl: projImg3,
      link: "https://final-henry-g6.netlify.app/"
    },
    {
      title: "Pokemon App",
      description: "Web app that allows searching, creating, editing, and deleting (CRUD) Pokémon by utilizing the Pokémon API and a database.",
      imgUrl: projImg1,
      link: "https://pi-pokemon.pages.dev/"
    },
    {
      title: "Rick & Morty App",
      description: "Web app that allows searching for Rick & Morty characters by ID and adding them to the favorites section.",
      imgUrl: projImg2,
      link: "https://rick-and-morty-app.pages.dev/"
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Full Stack Developer",
      authority: "Henry",
      issued: "Mar 2023",
    },
    {
      id: 2,
      title:"EF SET English Certificate 62/100 (C1 Advanced)",
      authority: "EF Standard English Test (EF SET) ",
      issued: "Mar 2023",
      credentialUrl: "https://www.efset.org/cert/V7eLK3"
    },
    {
      id: 3,
      title: "Google Analytics Certification",
      authority: "Google Digital Academy (Skillshop)",
      issued: "Mar 2023",
      credentialUrl: "https://skillshop.credential.net/db4cab5c-a3c3-4fa7-b67c-8b01944e72c8"
    },
    {
      id: 4,
      title: "Scrum Foundation Professional Certificate SFPC (v2020)",
      authority: "CertiProf",
      issued: "Mar 2023",
      credentialUrl: "https://www.credly.com/badges/14f77acd-e262-434b-a595-505161778bd6/public_url"
    },
    {
      id: 5,
      title: "JavaScript Algorithms and Data Structures",
      authority: "freeCodeCamp",
      issued: "Oct 2022",
      credentialUrl: "https://freecodecamp.org/certification/Oscar_Alatrista/javascript-algorithms-and-data-structures"
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
                      <Tab.Pane eventKey="second">
                        <div>
                       <LinkedInCertifications certifications={certifications} />
                       </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="container d-grid align-items-center">

                          <Document className="mx-auto" file={cv}>

                            <Page scale={1.0} renderTextLayer={false} renderAnnotationLayer={false} pageNumber={1} />
                          </Document>
                          <button className="text-white btn btn-danger mt-3 mx-auto"onClick={downloadPdf}>Descargar PDF</button>
                        </div>
                       
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bgir"></img>
    </section>
  )
}
