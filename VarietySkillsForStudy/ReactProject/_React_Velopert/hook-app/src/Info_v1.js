import React, { useEffect, useState } from 'react';
// Multi useState && useEffect
const Info = ()=>{
    const [name, setName] = useState('');
    const [nickname, setNickName] = useState('');

    // // ver. 1
    // useEffect(
    //     ()=>{
    //         console.log('렌더링이 완료 되었습니다.');
    //         console.log({
    //             name,
    //             nickname
    //         });
    //     }
    // );
    
    // //ver. 2
    // useEffect(
    //     ()=>{
    //         console.log('마운트될때만 실행 됩니다.');
    //     },[]
    // );

    // //ver. 3
    // useEffect(
    //     ()=>{
    //         console.log('name: ',name);
    //         console.log('nickname: ',nickname);
    //     },[name]
    // );

    // ver. 4
    useEffect(
        ()=>{
            console.log('effect');
            console.log(name);
            console.log(nickname);
            return ()=>{
                console.log('clean up');
                console.log(name);
                console.log(nickname);
            }
        },[name]
    );

    const onChangeName = e =>{
        setName(e.target.value);
    };

    const onChangeNickname = e =>{
        setNickName(e.target.value);
    };

    return(
    <div>
        <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickname} onChange={onChangeNickname}/>
        </div>
        <div>
            <div>
                <b>이름:</b>{name}
            </div>
            <div>
                <b>닉넴임:</b>{nickname}
            </div>
        </div>
    </div>
    );
}

export default Info;