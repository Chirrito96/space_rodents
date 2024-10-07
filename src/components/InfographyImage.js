import React from "react";
import infography from "../assets/img/infography.jpg";
// import "./InfographyImage.css"; // Archivo CSS para estilos

const InfographyImage = () => {
  return (
    <div className="infography-container">
      <img src={infography} alt="Infographic" className="infography-image" />
    </div>
  );
};

export default InfographyImage;
