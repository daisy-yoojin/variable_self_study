import React, {Component} from 'react'; // 리액트와 내부의 Component를 불러온다. 파일에서 jsx를 사용하기위해 React 반드시 import 시킬것
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render(){
    // const style={
    //   backgroundColor: 'black',
    //   padding: '16px',
    //   color: 'white',
    //   fontSize: '12px'
    // };
    return (
      // <div style={style}>
      //   hi there
      // </div>    
      // <div className="App">
      //   리액트
      // </div>  
      // <MyName name="리액트"/>
      <Counter/>
    );
  }
}

export default App;
