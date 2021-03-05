import React, { useState,useRef, useCallback } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링 해보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어 보기', checked: false },
  ]);
  //id는 고유값임
  // ref를 사용하여 변수 담을것.
  const nextId = useRef(4);

  const onInsert =useCallback(
    text=>{
      const todo = {
        id: nextId.current,
        text,
        checked:false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );
  
  const onRemove = useCallback(
    id=>{
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id=>{
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked}: todo,
        ),
      );
    },
    [todos],
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
};
export default App;

/*
UI구성 
- TodoTemplate: 화면을 가운데 정렬시켜 주며,앱 타이틀(일정관리)을 보여준다.
- TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트. state를 통해 인풋 상태 관리
- TodoListItem: 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트 . todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 ui를 보여준다
- TodoList: todos 배열을 props로 받아 온 후 , 이를 배열 내장 함수 map을 사용해서 여러개의 TodoListItem 컴포넌트로 변환하여 보여준다.
*/
