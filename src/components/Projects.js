import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import renatoImg from "../assets/img/renato.jpg"; // Importar la imagen local
import christianImg from "../assets/img/mark.jpeg"; // Importar la imagen local
import oscarImg from "../assets/img/oscar.png"; // Importar la imagen local
import martinImg from "../assets/img/martin.jpeg"; // Importar la imagen local
import alexkaImg from "../assets/img/alexka.jpeg"; // Importar la imagen local

// Componente AboutUs
const AboutUs = () => {
  const teamMembers = [
    {
      name: "Crhistian Montenegro",
      profession: "Bachelor in Biotechnology",
      imageUrl: christianImg, // Asegúrate de importar correctamente esta imagen
    },
    {
      name: "Renato Rojas Dominguez",
      profession: "Bachelor in Biotechnology",
      imageUrl: renatoImg,
    },
    {
      name: "Oscar Alatrista Zegarra",
      profession: "Software Engineer",
      imageUrl: oscarImg,
    },
    {
      name: "Martin Izaga",
      profession: "Data Engineer",
      imageUrl: martinImg,
    },
    {
      name: "Alexka Mota Estela",
      profession: "University student of Administration and Marketing",
      imageUrl: alexkaImg,
    },
  ];

  return (
    <div
      id="about"
      style={{
        padding: "50px 0",
        textAlign: "center",
        backgroundColor: "transparent",
      }}
    >
      <h2 style={styles.title}>Meet our Team</h2>
      <Container>
        <Row>
          {teamMembers.map((member, index) => (
            <Col
              xs={12}
              md={4}
              key={index}
              className="d-flex justify-content-center align-items-center"
            >
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeInUp" : ""
                    }
                    style={styles.memberCard}
                  >
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      style={styles.image}
                    />
                    <h3 style={styles.name}>{member.name}</h3>
                    <p style={styles.profession}>{member.profession}</p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

// Estilos en línea
const styles = {
  title: {
    marginBottom: "20px",
    color: "rgba(106, 27, 154, 0.8)",
  },
  memberCard: {
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    color: "rgba(255, 255, 255, 0.8)",
  },
  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginBottom: "10px",
    objectFit: "cover",
  },
  name: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.9)",
  },
  profession: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.7)",
  },
};

// Exportar el componente
export default AboutUs;
