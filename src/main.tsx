import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

const rootElement = document.getElementById("root")

if (!rootElement) {
  console.error("Elemento root não encontrado!")
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  } catch (error) {
    console.error("Erro ao renderizar o App:", error)
  }
}
