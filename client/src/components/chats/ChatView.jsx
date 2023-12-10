import React, { useEffect, useState } from "react";
import "../../styles/chats/chats.css";
import { socket } from "../../socket.js";

function ChatView({ username, currentRoom, clear, setClear }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    const contenedor = document.getElementById("miContenedor");
    if (contenedor) {
      contenedor.scrollTop = contenedor.scrollHeight;
    }
    if (newMessage.trim() === "") return;

    socket.emit("send-message-to-room", {
      toRoom: currentRoom,
      username,
      text: newMessage,
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
        { username: message.username, text: message.text, type: "message" },
      ]);
    };
    const user_room_event = (info) => {
      console.log(info.type);
      setMessages([...messages, { username: info.username, type: info.type }]);
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
      <h2 className="title-room">{currentRoom}</h2>
      <div
        id="miContenedor"
        className="chatView"
        style={{ textAlign: "left", height: "84vh" }}
      >
        {/* Mostrar mis mensajes a la derecha */}
        {messages.map((message, index) => {
          if (message.type === "message") {
            return (
              <div className="message-card" key={index}>
                {message.username}: <div>{message.text}</div>
              </div>
            );
          } else {
            return (
              <div className="info-card" key={index}>
                <div>
                  {" "}
                  {message.username} :{" "}
                  {message.type === "leave_user"
                    ? " Ha dejado la sala"
                    : "Ha entrado a la sala"}
                </div>
              </div>
            );
          }
        })}
      </div>

      <input
        className="input-dating"
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSendMessage} className="button-dating">
        Enviar
      </button>
    </div>
  );
}

export default ChatView;
