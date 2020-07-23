// console.log('Im Working!. Im JS! NOw we start!');
// const a = 221;
// let b = a-5;
// // a = 4;
// // var : if variable has change user as let if not use as const
// console.log(b, a);
// // use const as first
// // do not use let till really need it

// function sayHi(){
//     console.log("Helllloooooooooooo!!!!!!");
// }
// function hiHi(str){
//     console.log("hello there", str);
// }

// sayHi();
// hiHi("sososo");

// // DOM == Document Object Model
// const title = document.getElementById("title");
// console.log(title);
// title.innerHTML = "Hi! From JS"; // power of JS is this!! 
// title.style.color="yellow";
// console.dir(document);
// document.title='I own you enough'; //== <title>I own you enough</title>

// const title1 = document.querySelector("#title"); // same as css by id
// const title2 = document.querySelector(".title"); // same as css by class

// function handleResize(event){
//     console.log(event);
//     // console.log("I have been resize");
// }
// function handleClick(){
//     title1.style.color='blue';
    
// }
// // window.addEventListener("resize",handleResize); // do not call function immediately
// window.addEventListener("click",handleClick); // do not call function immediately

// if("10" === 10){
//     console.log("hi");
// }else if("10" === 11){
//     console.log("ho");
// }else{
//     console.log("else");
// }



// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     // console.log(title.style.color);
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//         console.log(title.style.color);
//     }else{
//         title.style.color = BASE_COLOR;
//         console.log(title.style.color);
//     }
// }
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
function handleClick(){
    // // const currentClassName = title.className;
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // // if(currentClassName !== CLICKED_CLASS){
    //     // title.className = CLICKED_CLASS;
    // if(!hasClass){    
    //     title.classList.add(CLICKED_CLASS);
    // }else{
    //     // title.className = "";
    //     title.classList.remove(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    // title1.style.color=BASE_COLOR;
    title.addEventListener("click",handleClick);
    // always use MDN to check all events and for want to know
}

init();