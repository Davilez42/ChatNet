import React, { useState } from 'react'
import "../../styles/chats/chats.css"

function Technology({ inputValue }) {
  
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {

    // Encuentra el elemento contenedor por su ID o cualquier otro selector
    const contenedor = document.getElementById('miContenedor');

    // Desplázate automáticamente al final del contenedor
    if (contenedor) {
      contenedor.scrollTop = contenedor.scrollHeight;
    }

    if (newMessage.trim() === '') return;

    // Agregar el nuevo mensaje al estado de mensajes
    setMessages([...messages, { text: newMessage, sender: 'me' }]);

    // Limpiar el campo de entrada
    setNewMessage('');
  };

  const handleKeyDown = (event) => {
    // Verifica si la tecla presionada es Enter (código de tecla 13)
    if (event.key === 'Enter') {
      event.preventDefault(); // Evita que el Enter realice un salto de línea en el textarea o input multilineal
      handleSendMessage();
    }
  };

  return (
    <div className='body-chat-dating'>

      {/* le dejos esos estilos por fuera para que no se vaya a perder ya luego los acomoda en el css o me dice y yo lo hago relajado */}
      <div id="miContenedor" className='my-dating' style={{ textAlign: 'left', height: '84vh', overflowY: 'auto' }}>
        {/* Mostrar mis mensajes a la derecha */}
        {messages
          .filter((message) => message.sender === 'me')
          .map((message, index) => (
            <div className='message-dating' key={index}>{inputValue}: <div>{message.text}</div></div>
          ))}
      </div>

      <div style={{ textAlign: 'right'}}>
        {/* Mostrar los mensajes de otros a la izquierda */}
        {messages
          .filter((message) => message.sender !== 'me')
          .map((message, index) => (
            <div key={index}>{message.text}</div>
          ))}
      </div>

      <input
        className='input-dating'
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      
      <button onClick={handleSendMessage} className='button-dating'>Enviar</button>
    </div>
  )
}

export default Technology