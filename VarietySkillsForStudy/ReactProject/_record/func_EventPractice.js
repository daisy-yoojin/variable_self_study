import React, { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <>
      <input
        name="username"
        value={username}
        onChange={onChangeUsername}
        onKeyPress={onKeyPress}
      />
      <input
        name="message"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
    </>
  );
};

export default EventPractice;
