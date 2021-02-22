import React, { useReducer } from 'react';

// useReducer

function reducer(state,action){
    // action, type에 따라 다른 작업 수행
    switch (action.type){
        case 'INCREAMENT':
            return { value: state.value+1};
        case 'DECREAMENT':
            return { value: state.value-1};
        default:
            //아무것도 해당 없을떄 기존 상태 변환
            return state;
    }


}
const Counter = () =>{
    const [state, dispatch] = useReducer(reducer, {value: 0}); // 기본값

    return (
        <>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={()=> dispatch({type: 'INCREAMENT'})}>+1</button>
            <button onClick={()=> dispatch({type: 'DECREAMENT'})}>-1</button>
        </>
    );
};

export default Counter;