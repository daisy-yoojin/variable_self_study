import React, { useState, useCallback } from "react";
import db from "../firebase";
import { useStateValue } from "../state/StateProvider";
import "./ChatInput.css";
import firebase from "firebase";
import Picker from "emoji-picker-react";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojiModal, setShowEmojiModal] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

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
    setInput((e.target.value = ""));
  });
  const openModal = () => {
    setShowEmojiModal(true)
  }
  const closeModal = () => {
    setShowEmojiModal(false)
  }

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={onChange}
          placeholder={`Message #${channelName}`}
        />
        <button className="btnEmoji" onClick={openModal}>Emoji</button>
        {/* emojipicker add */}
        {/* <Picker/> */}
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
