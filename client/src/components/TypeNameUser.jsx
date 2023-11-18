import { useState, useEffect } from "react";
import "../styles/TypeNameUser/typeNameUser.css";
import { socket } from "../socket.js";

function TypeNameUser() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= 20) {
      setInputValue(value);
    }
  };

  const sendUsername = () => {
    socket.emit("new_user", {
      username: inputValue,
    });
  };

  useEffect(() => {
    socket.connect();

    const info_message = (body) => {
      if (body.status === 400) {
        return setMessage(body.message);
      }
      //! redireccione  a la vista principal aqui aqui
    };

    socket.on("info_message", info_message);

    return () => {
      socket.off("info_message", info_message);
    };
  }, []);

  return (
    <div className="body-TypeNameUser">
      <div className="body-TypeNameUser-mar">
        <h1 className="greet">Bienvenid@</h1>
        <h3 className="tittle-TypeNameUser">
          {inputValue.length === 0
            ? "Ingrese su nombre (máximo 20 caracteres, de cualquier tipo)."
            : `Usuari@ ${inputValue}`}
        </h3>
        <div className="info-message"> {message}</div>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ejemplo: Andres94-web"
          className="name-TypeNameUser"
          type="text"
        />
        {inputValue.length > 0 && (
          <button onClick={sendUsername} className="button-TypeNameUser">
            Ingresar
          </button>
        )}
      </div>
    </div>
  );
}

export default TypeNameUser;
