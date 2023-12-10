import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SeeUser from "./SeeUser.jsx";
import { socket } from "../socket.js";
import "../styles/TypeNameUser/typeNameUser.css";

function TypeNameUser() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [noneType, setNoneType] = useState("total-none");
  const [noneSee, setNonesee] = useState("body-TypeNameUser");

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= 12 && value !== " ") {
      setInputValue(value);
    }
  };

  const sendUsername = () => {
    socket.emit("new_user", {
      username: inputValue,
    });
  };

  useEffect(() => {
    const info_message = (body) => {
      if (body.status === 400) {
        return setMessage(body.message);
      }
      setNoneType("a");
      setNonesee("total-none");
    };
    socket.on("info_message", info_message);
    return () => {
      socket.off("info_message", info_message);
    };
  }, []);

  return (
    <>
      <div className={noneSee}>
        <div className="body-TypeNameUser-mar">
          <h1 className="greet">Bienvenid@ a ChatNet</h1>
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
              <Link to="/" className="link-button-TypeNameUser">
                Ingresar
              </Link>
            </button>
          )}
        </div>
      </div>

      <div className={noneType}>
        <SeeUser inputValue={inputValue} />
      </div>
    </>
  );
}

export default TypeNameUser;
