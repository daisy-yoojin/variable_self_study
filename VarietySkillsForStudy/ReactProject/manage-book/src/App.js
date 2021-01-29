import React, {Component} from 'react';
import NavBar from './components/route/NavBar';
import AppRouter from './components/route/RouterComponent';

// matertial UI
import Container from '@material-ui/core/Container'
class App extends Component{

  render(){
    return (
      <div className="App">
        <NavBar></NavBar>
        {/* <InputForm/> */}
        <Container>
          <AppRouter/>
        </Container>
      </div>
    );
  }
}

export default App;
