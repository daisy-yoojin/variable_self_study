import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산중...');
    if(numbers.length === 0 )return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum/numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    // useRef
    const inputEl = useRef(null);

    // const onChange =(e)=>{
    //     setNumber(e.target.value); // input값 change 처리
    // };
    const onChange = useCallback(
        e=>{
            // console.log('onChange');
            setNumber(e.target.value);
        },[]);// component가 처음 렌더링 될때만 함수 생성

    // const onClick= (e)=>{
    //     const nextList = list.concat(parseInt(number)); // 기존 
    //     setList(nextList); // 기존 list 새 list 값으로 변경
    //     setNumber(''); // 숫자 넣은 후 입력 부분 초기화
    // }
    const onClick = useCallback(
        ()=>{
            // console.log('onClick');
            const nextList = list.concat(parseInt(number)); // 기존 
            setList(nextList); // 기존 list 새 list 값으로 변경
            setNumber(''); // 숫자 넣은 후 입력 부분 초기화

            //useRef 처리 부분: ㅇ비력후 focus 유지
            inputEl.current.focus();

        },[number, list]); // number 혹은 list가 바뀌었을때만 함수 생성

    const onReset=(e)=>{
        setList([]);
    }

    const avg = useMemo(()=>getAverage(list), [list]);

    return(
        <div>
            <div>
                <input value={number} onChange={onChange} ref={inputEl} />
                <button onClick={onClick} >등록</button>
                <button onClick={onReset} >초기화</button>
                <ul>
                    {list.map((value, index)=>(
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </div>
            <div>
                <b>평균값: </b> {avg}
            </div>
        </div>
    );
}

export default Average;