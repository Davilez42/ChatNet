import React, { useEffect, useState } from "react";
import "../styles/seeUser/seeUser.css";
import ChatView from "./ChatView";
import generateColorHexadecimal from "../helpers/generateColorHex";
import { socket } from "../socket";

function SeeUser({ inputValue }) {
  const [currentsRooms, setCurrentsRooms] = useState([]);
  const [currentRoomListen, setCurrentRoomListen] = useState("");
  const [getRooms, setGetRooms] = useState(true);
  const [nameNewRoom, setNameNewRoom] = useState("");
  const [clear, setClear] = useState(false);

  const [colorUser, setColorUser] = useState(generateColorHexadecimal());

  const handlerListenRoom = (room) => {
    console.log(currentRoomListen);
    if (currentRoomListen !== room) {
      if (currentRoomListen !== "") {
        socket.emit("leave-room", {
          username: inputValue,
          colorUser,
          name_room: currentRoomListen,
        });
      }
      socket.emit("join-room", {
        username: inputValue,
        colorUser,
        name_room: room,
      });
      setCurrentRoomListen(room);
    }
  };

  const handlerCreateRoom = () => {
    if (currentRoomListen !== "") {
      socket.emit("leave-room", {
        username: inputValue,
        colorUser,
        name_room: currentRoomListen,
      });
    }
    if (nameNewRoom !== "") {
      socket.emit("join-room", {
        username: inputValue,
        colorUser,
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
        <div className="container-info-user">
          <h1 className="rooms-user-name">{inputValue}</h1>
        </div>
        <div className="container-create-room">
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

        <div className="current-rooms">
          <p>Salas</p>
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
        </div>
      </section>

      <section className="chats-user">
        <div className={""}>
          <ChatView
            username={inputValue}
            clear={clear}
            setClear={setClear}
            currentRoom={currentRoomListen}
            colorUser={colorUser}
          />
        </div>
      </section>
    </div>
  );
}

export default SeeUser;
