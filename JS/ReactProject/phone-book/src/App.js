import React, {Component} from 'react'
import './App.css';
import PhoneForm from './components/PhoneForm';

class App extends Component{
  id =2
  state={
    information:[
      {
        id:0,
        name:'김가나',
        phone:'010-0000-0000'
      },
      {
        id:1,
        name:'김다라',
        phone:'010-0000-0001'
      }
    ]
  } 

  handleCreate = (data)=>{
    console.log(data);
    const {information} = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  };

  render() {
    const {information} = this.state;
    return(
      <div>
        <PhoneForm
          onCreate={this.handleCreate}/>
          {JSON.stringify(information)}
      </div>
    );
  }
}

export default App;
