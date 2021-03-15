import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
//material ui
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  console.log('roomDetails >>>>>',roomDetails);
  console.log("MESSAGES >>>> ", roomMessages);

  return (
    <div className="chat">
      {/* <h2> You are in the {roomId} </h2> */}
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarOutlineIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
          {/* <Message .../> */}
          {roomMessages.map(({message , timestamp, user, userImage})=>(
              <Message
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
              />
          ))}
      </div>
      <div className="chat__messages">
      <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
      </div>
    </div>
  );
};

export default Chat;
