import React from "react";
import "./Horario.css";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ✅ Import correcto
import UserMenu from "./UserMenu";

function Horario() {
  const navigate = useNavigate();

  const handleDownload = () => {
    // Crear una instancia de jsPDF
    const doc = new jsPDF();

    // Título principal
    doc.setFontSize(18);
    doc.text("Horarios - EPET - N20", 20, 20);

    // Subtítulo
    doc.setFontSize(14);
    doc.text("Horarios de consulta de los profesores", 20, 30);

    // Datos de ejemplo (puedes reemplazarlos por los reales)
    const horarios = [
      ["Profesor", "Materia", "Día", "Horario"],
      ["Martínez, Ana", "Matemática", "Lunes", "08:00 - 09:30"],
      ["Gómez, Luis", "Lengua", "Martes", "10:00 - 11:30"],
      ["Fernández, Carla", "Física", "Miércoles", "09:00 - 10:30"],
      ["Pérez, Juan", "Programación", "Jueves", "14:00 - 15:30"],
      ["Rodríguez, Sofía", "Electricidad", "Viernes", "08:00 - 09:30"],
    ];

    // Generar la tabla con autoTable (usando la función importada)
    autoTable(doc, {
      startY: 40,
      head: [horarios[0]],
      body: horarios.slice(1),
      theme: "grid",
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      styles: { fontSize: 12, cellPadding: 3 },
      columnStyles: {
        0: { cellWidth: 50 },
        1: { cellWidth: 40 },
        2: { cellWidth: 40 },
        3: { cellWidth: 40 },
      },
    });

    // Guardar el archivo PDF
    doc.save("Horario.pdf");
  };

  return (
    <div className="horario-container">
      <UserMenu />
      <div className="wave-bg"></div>

      <div className="horario-content">
        <h1 className="horario-title">
          Horarios de consulta de su profesor o materia.
        </h1>

        <div className="action-buttons-top">
          <button className="btn-descargar" onClick={handleDownload}>
            Descargar
          </button>
        </div>
      </div>

      <div className="buttons-footer">
        <button className="btn-volver" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    </div>
  );
}

export default Horario;
