import React, { useState, useCallback } from "react";
import './styles/TodoInsert.scss'

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onClick = useCallback(
    (e) => {
      onInsert(value);
      setValue(""); // value 초기화
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick}>
        {/* <MdAdd /> */}
        ADD
      </button>
    </form>
  );
}

export default TodoInsert;
