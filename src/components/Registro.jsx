function Registro() {
  return (
    <>
      <div className="Mayor">
        <div className="Medio">
          <h1>Registro</h1>
          <form>
            <label>Apellido:</label>
            <input type="text" required />

            <label>Nombre:</label>
            <input type="text" required />

            <label>DNI:</label>
            <input
              type="text"
              inputMode="numeric"
              pattern="\d{8}"
              maxLength="8"
              placeholder="DNI (8 dígitos)"
              required
            />

            <label>Curso:</label>
            <input type="number" required />

            <label>Teléfono:</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              maxLength="10"
              placeholder="Ej: 2991234567"
              required
            />

            <label>Materias a rendir:</label>
            <input type="text" required />

            <label>¿Es la última materia de la secundaria?</label>
            <select required>
              <option value="">Seleccione una opción</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>

            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Registro;