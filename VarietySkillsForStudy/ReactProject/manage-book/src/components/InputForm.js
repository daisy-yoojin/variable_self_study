import React, {Component} from 'react';

class InputForm extends Component{
    state={
        id:'',
        pwd:'',
        name:'',
        email:'',
    }

    handleChange = (e)=>{
        
    }
    render(){
        return(
            <div className='inputDiv'>
                <form>
                    <input placeholder='ID' name='id' value={this.state.id} onChange={this.handleChange}/> 
                    <input placeholder='password' name='pwd' value={this.state.pwd} onChange={this.handleChange}/> 
                    <input placeholder='이름' name='name' value={this.state.name} onChange={this.handleChange}/> 
                    <input placeholder='E-MAIL' name='email' value={this.state.email} onChange={this.handleChange}/> 
                    <button type="submit">등록</button>
                </form>
            </div>
        );
    }

}

export default InputForm;