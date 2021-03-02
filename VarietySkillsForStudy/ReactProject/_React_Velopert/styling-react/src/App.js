import { Component } from 'react';
import CSSModule from './CssModule/CSSModule';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponents/StyledComponent';

class App extends Component {
  render(){
    return (
      <div >
        <SassComponent/>
        <CSSModule/>
        <StyledComponent/>
      </div>
    );
  }
}

export default App;
