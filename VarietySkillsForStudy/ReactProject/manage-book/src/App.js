import React, {Component} from 'react';
import './App.css';
import InputForm from './components/InputForm';
import ApiService from './ApiService';
import AppRouter from './components/route/RouterComponent';

class App extends Component{

  render(){
    return (
      <div className="App">
        <InputForm/>
        <AppRouter/>
      </div>
    );
  }
}

export default App;
