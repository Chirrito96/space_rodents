import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import AboutUs from "./components/Projects";
import ChatComponent from "./components/ChatComponent";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <div id="analysis" className="iframe-container">
        <iframe
          title="Rodent"
          src="https://app.powerbi.com/view?r=eyJrIjoiY2U4NjI4ZTYtZjQ5Mi00YjE3LWI4YWQtYzQ4NDU1YzAzNDIzIiwidCI6Ijk1N2ZlODNhLTdmM2MtNGQwMS04MjM1LTUwYzhlZTY5ZTBlYSIsImMiOjR9"
          frameBorder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
      <AboutUs />
      {/* Contenedor para el iframe */}

      <button
        onClick={toggleChat}
        className="btn btn-primary"
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        {isChatOpen ? "Close Chat" : "Open chat"}
      </button>

      {/* Componente del Chat con animación */}
      {isChatOpen && (
        <div
          className={`chat-container ${isChatOpen ? "slide-in" : "slide-out"}`}
        >
          <ChatComponent />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
