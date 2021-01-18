import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{
    //최적화
    // re-rendering 정의 - 미 정의시 true반환
    shouldComponentUpdate(nextProps, nextSate){
        return this.props.todos !== nextProps.todos;
    }
    render(){
        // todos: Array of todo
        // onToggle: change status of checkbox
        // onRemove: remove item
        const {todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(
            ({id, text, checked})=>(
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id} //배열 렌더링할땐 꼭 key값이 있어야한다.
                />
            )
        )
        return(
            // <div>
            //     <TodoItem text='안녕'/>
            //     <TodoItem text='리액트'/>              
            //     <TodoItem text='반가워'/>
            // </div>
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;
