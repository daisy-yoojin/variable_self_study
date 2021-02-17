import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = userState({
    username: "",
    message: "",
  });
  const { username, message } = form; // 위의 useState 할당

  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 복사
      [e.target.name]: e.target.value, // 원하는 값 덮어쓰기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
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
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <input
        name="message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </>
  );
};

export default EventPractice;
