import React, { useState } from "react";
import { callGradio } from "../gradioApi"; // Importar la función para llamar a Gradio

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    // Agregar mensaje del usuario a la conversación
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    console.log("Mensaje enviado:", newMessage); // Log del mensaje enviado
    setNewMessage("");
    setLoading(true);
    console.log("Cargando respuesta..."); // Log para indicar que se está cargando la respuesta

    try {
      // Llamamos a Gradio para obtener la respuesta
      const gradioResponse = await callGradio(newMessage);
      console.log("Respuesta de Gradio:", gradioResponse); // Log de respuesta

      // Agregar respuesta del bot a la conversación
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: gradioResponse, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      // Manejo de errores: puedes agregar un mensaje de error si lo deseas
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Bienvenido a Space Rodents", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
      console.log("Carga finalizada."); // Log para indicar que la carga ha terminado
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        borderWidth: "2px",
        borderRadius: "8px",
        borderColor: "rgba(106, 27, 154, 0.8)", // Cambiado a morado
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ color: "rgba(106, 27, 154, 0.8)", marginBottom: "10px" }}>
        Chat Bot
      </h2>
      <div
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          marginBottom: "10px",
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: "black",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: msg.sender === "user" ? "#800080" : "#ddd", // Cambiado a morado
                color: msg.sender === "user" ? "white" : "black",
                padding: "8px",
                borderRadius: "8px",
                display: "inline-block",
                maxWidth: "80%",
              }}
            >
              <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong>{" "}
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ textAlign: "left", marginBottom: "10px" }}>
            <div
              style={{
                backgroundColor: "#ddd",
                color: "black",
                padding: "8px",
                borderRadius: "8px",
                display: "inline-block",
                maxWidth: "80%",
              }}
            >
              Loading...
            </div>
          </div>
        )}
      </div>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          style={{
            flex: 1,
            marginRight: "5px",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid rgba(106, 27, 154, 0.8)", // Cambiado a morado
            color: "white",
            backgroundColor: "black",
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            backgroundColor: "rgba(106, 27, 154, 0.8)", // Cambiado a morado
            color: "white", // Cambiado a blanco
            border: "none",
            padding: "10px 15px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
