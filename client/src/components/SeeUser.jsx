import React, { useEffect, useState } from "react";
import "../styles/seeUser/seeUser.css";
import ChatView from "./chats/ChatView";

import { socket } from "../socket";

function SeeUser({ inputValue }) {
  const [currentsRooms, setCurrentsRooms] = useState([]);
  const [currentRoomListen, setCurrentRoomListen] = useState("");
  const [getRooms, setGetRooms] = useState(true);
  const [nameNewRoom, setNameNewRoom] = useState("");
  const [clear, setClear] = useState(false);

  const handlerListenRoom = (room) => {
    console.log(currentRoomListen);
    if (currentRoomListen !== room) {
      if (currentRoomListen !== "") {
        socket.emit("leave-room", {
          username: inputValue,
          name_room: currentRoomListen,
        });
      }
      socket.emit("join-room", { username: inputValue, name_room: room });
      setCurrentRoomListen(room);
    }
  };

  const handlerCreateRoom = () => {
    if (currentRoomListen !== "") {
      socket.emit("leave-room", {
        username: inputValue,
        name_room: currentRoomListen,
      });
    }
    if (nameNewRoom !== "") {
      socket.emit("join-room", {
        username: inputValue,
        name_room: nameNewRoom,
      });
      setCurrentRoomListen(nameNewRoom);
    }
    setNameNewRoom("");
  };

  useEffect(() => {
    if (getRooms) {
      socket.emit("get-rooms", () => {});
      setGetRooms(false);
    }

    const get_Rooms_event = (r) => {
      setCurrentsRooms([...r.rooms]);
    };

    const new_room_event = (r) => {
      console.log("recibe envento de nueva sala");
      setCurrentsRooms([...currentsRooms, r.new_room]);
    };

    const room_delete_event = (r) => {
      console.log("elikmina sala");
      setCurrentsRooms(currentsRooms.filter((cr) => cr !== r.name_room));
    };

    socket.on("get-rooms", get_Rooms_event);
    socket.on("new_room", new_room_event);
    socket.on("delete_room", room_delete_event);

    return () => {
      socket.off("get-rooms", getRooms);
      socket.off("new_room", new_room_event);
      socket.off("delete_room", room_delete_event);
    };
  }, [currentsRooms]);

  return (
    <div className="body-SeeUser">
      <section className="rooms-user">
        <h1 className="rooms-user-name">{inputValue}</h1>

        <div>
          <input
            className="input-name-new-room"
            type="text"
            value={nameNewRoom}
            onChange={(event) => setNameNewRoom(event.target.value)}
            placeholder="nombre de la sala"
          />
          <div
            className="button-create-room"
            onClick={() => {
              handlerCreateRoom();
            }}
          >
            crear
          </div>
        </div>

        {currentsRooms.map((r, ind) => (
          <button
            key={ind}
            onClick={() => {
              handlerListenRoom(r);
              setClear(true);
            }}
            className="button-rooms-users"
          >
            {r}
          </button>
        ))}
      </section>

      <section className="chats-user">
        <div className={""}>
          <ChatView
            username={inputValue}
            clear={clear}
            setClear={setClear}
            currentRoom={currentRoomListen}
          />
        </div>
      </section>
    </div>
  );
}

export default SeeUser;
