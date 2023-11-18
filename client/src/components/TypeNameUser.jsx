import { useState } from "react"
import "../styles/TypeNameUser/typeNameUser.css"

function TypeNameUser() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= 20) {
      setInputValue(value);
    }
  };

  return (
    <div className="body-TypeNameUser">
        <div className="body-TypeNameUser-mar">
        <h1 className="greet">Bienvenid@</h1>
            <h3 className="tittle-TypeNameUser">{inputValue.length === 0 ? "Ingrese su nombre (máximo 20 caracteres, de cualquier tipo)." : `Usuari@ ${inputValue}`}</h3>
            <input 
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ejemplo: Andres94-web"
              className="name-TypeNameUser" 
              type="text" 
            />
            {inputValue.length > 0 && <button className="button-TypeNameUser">Ingresar</button>}
        </div>
    </div>
  )
}

export default TypeNameUser