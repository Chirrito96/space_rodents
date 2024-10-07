// src/gradioApi.js
import { Client } from "@gradio/client";

const GRADIO_URL = "C2MV/PROYECTO_2024"; // Reemplaza con la URL correcta de tu modelo

// Función para llamar a la API de Gradio
export async function callGradio(question) {
  try {
    // Conectamos al cliente de Gradio
    console.log("Conectando al cliente de Gradio...");
    const client = await Client.connect(GRADIO_URL);
    console.log("Cliente de Gradio conectado.");

    // Llamada a la predicción usando los datos requeridos
    console.log("Enviando pregunta a Gradio:", question);
    const result = await client.predict("/on_submit", {
      message: question,
      selected_option: "Ambos (basado en umbral de similitud)",
      similarity_threshold: 0.5,
      system_prompt: `
      Actúa como un presentador entusiasta del proyecto 'SpaceRodents' del NASA SPACE APPS Challenge 2024.
      Tu misión es explicar de forma accesible y emocionante cómo un equipo diverso usa inteligencia artificial para analizar datos de ratones en el espacio.
      Comunica los objetivos del proyecto, la tecnología utilizada y sus posibles beneficios, usando analogías simples y un tono conversacional.
      Muestra pasión por la ciencia espacial mientras explicas cómo estudiamos los efectos del espacio en los roedores.
      Evita jerga técnica compleja, no actúes como investigador y no inventes resultados específicos.
      Conecta el proyecto con beneficios cotidianos y mantén el misterio y la emoción de la exploración espacial.
      `,
      max_length: 100,
    });

    console.log("Respuesta de Gradio recibida:", result.data); // Log de respuesta
    return result.data; // Retornamos los datos obtenidos
  } catch (error) {
    console.error("Error al llamar a Gradio:", error);
    throw error; // Lanza el error si ocurre algún problema
  }
}
