import React, {Component} from 'react';
import AppRouter from './components/route/RouterComponent';

class App extends Component{

  render(){
    return (
      <div className="App">
        {/* <InputForm/> */}
        <AppRouter/>
      </div>
    );
  }
}

export default App;
