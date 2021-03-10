const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnincrease = document.querySelector('#increase');
const btndecrease = document.querySelector('#decrease');

// 액션 타입과 액션 생성함수 정의
// 액션: 프로젝트 상태에 변화를 일으키는 것
// 액션 이름 : 문자열 형태 , 주로 대문자 작성, 이름은 고유해야한다. 중복 X
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//액션 객체 생성하기 type값 필수!
const toggleSwitch = ()=>({type:TOGGLE_SWITCH});
const increase = difference=>({type:INCREASE, difference});
const decrease = ()=>({type:DECREASE});

//초기값 설정 - 숫자/ 문자열 / 객체 가능
const initialState={
    toggle: false,
    counter:0
}

//리듀서 함수정의
//리듀서: 변화를 일으키는 함수. 함수의 파라미터로 state action값을 받아온다.
//state가 undefinded일때는 initalState를 기본값으로 사용
function reducer(state=initialState,action){
    
}
