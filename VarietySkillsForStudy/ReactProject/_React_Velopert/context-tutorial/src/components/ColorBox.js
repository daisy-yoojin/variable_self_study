import React, { useContext } from "react";
import ColorContext from "../contexts/color";

//static contextType
// hook -> 함수형 컴포넌트에선만 사용할 수 있다. class형에서는 사용불가하다.
const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: " 64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor, // 비구조화 할당
        }}
      />
    </>
  );
};

export default ColorBox;
