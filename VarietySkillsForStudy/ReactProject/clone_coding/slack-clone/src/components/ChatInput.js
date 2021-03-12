import React, { useState, useCallback } from "react";
import db from "../firebase";
import { useStateValue } from "../state/StateProvider";
import "./ChatInput.css";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const sendMessage = useCallback((e) => {
      console.log("send>>>", e.target.value);
      console.log(channelId);
      e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  });
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={onChange}
        //   placeholder={`Message #${channelName.toLowerCase()}`}
          placeholder={`Message #${channelName.toLowerCase()}`}
        />
        <button onClick={sendMessage}>SEND</button>
      </form>
    </div>
  );
};

export default ChatInput;
