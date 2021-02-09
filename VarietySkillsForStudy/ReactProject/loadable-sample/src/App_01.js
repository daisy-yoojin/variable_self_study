import React, { Component } from 'react';
// import SplitMe from './SplitMe';
// import notify from './notify';

class App extends Component {
  state ={
    SplitMe: null,
  };
  
  handleClick = () => {
    // notify();
    // import('./notify').then(({default: notify})=>{
    //   notify();
    // });
    import('./SplitMe').then(({ default: SplitMe})=>{
      this.setState({
        SplitMe
      });
    });    
  };
  render() {
    const {SplitMe} = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        {SplitMe && <SplitMe/>}
      </div>
    );
  }
}

export default App;