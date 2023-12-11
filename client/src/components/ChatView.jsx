import React, { useEffect, useState } from "react";
import "../styles/chats/chats.css";
import { socket } from "../socket.js";

function ChatView({ username, currentRoom, clear, setClear, colorUser }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    const tkn = window.sessionStorage.getItem("tkn");
    const contenedor = document.getElementById("miContenedor");
    if (contenedor) {
      contenedor.scrollTop = contenedor.scrollHeight;
    }
    if (newMessage.trim() === "") return;

    socket.emit("send-message-to-room", {
      toRoom: currentRoom,
      username,
      colorUser,
      text: newMessage,
      tkn,
    });
    setNewMessage("");
  };

  const handleKeyDown = (event) => {
    // Verifica si la tecla presionada es Enter (código de tecla 13)
    if (event.key === "Enter") {
      event.preventDefault(); // Evita que el Enter realice un salto de línea en el textarea o input multilineal
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (clear) {
      setMessages([]);
      setClear(false);
    }
    const recived_message_event = (message) => {
      setMessages([
        ...messages,
        {
          username: message.username,
          colorUser: message.colorUser,
          text: message.text,
          type: "message",
        },
      ]);
    };
    const user_room_event = (info) => {
      console.log(info.type);
      setMessages([
        ...messages,
        { username: info.username, colorUser: info.colorUser, type: info.type },
      ]);
    };

    socket.on(`received_message`, recived_message_event);
    socket.on(`user_leave_room`, user_room_event);
    socket.on(`user_entered_room`, user_room_event);

    return () => {
      socket.off(`received_message`, recived_message_event);
      socket.off(`user_leave_room`, user_room_event);
      socket.off(`user_entered_room`, user_room_event);
    };
  }, [messages, clear]);

  return (
    <div className="container-chat-view">
      {/* le dejos esos estilos por fuera para que no se vaya a perder ya luego los acomoda en el css o me dice y yo lo hago relajado */}
      <h1 className="title-room">{currentRoom || "Bienvenido a chatNet.."}</h1>
      <div className="chatView">
        {/* Mostrar mis mensajes a la derecha */}
        {messages.map((message, index) => {
          if (message.type === "message") {
            return (
              <div className="message-card" key={index}>
                <p
                  className="username-user"
                  style={{
                    color: message.colorUser,
                  }}
                >
                  {message.username}
                </p>
                :<div>{message.text}</div>
              </div>
            );
          } else {
            return (
              <div className="info-card" key={index}>
                <div>
                  <p
                    className="username-user"
                    style={{
                      color: message.colorUser,
                    }}
                  >
                    {message.username}
                  </p>

                  {(() => {
                    if (message.type === "leave_user") {
                      return " Ha dejado la sala";
                    }
                    if (message.type === "entered_user") {
                      return " Ha entrado la sala";
                    }
                    if (message.type === "disconnect_user") {
                      return " Se ha desconectado";
                    }
                  })()}
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="container-inputs">
        <input
          className="input-dating"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div onClick={handleSendMessage} className="button-dating">
          Enviar
        </div>
      </div>
    </div>
  );
}

export default ChatView;
