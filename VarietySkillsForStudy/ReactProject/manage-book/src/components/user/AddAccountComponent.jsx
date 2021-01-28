import React, {Component} from 'react';
import ApiService from '../../ApiService';

//Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddAccountComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            id: '',
            pwd: '',
            name: '',
            email: '',
            phone:''
        }
    }
    onChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    saveAccount = (e)=>{
        e.preventDefault();
        let account={
            id: this.state.id,
            pwd: this.state.pwd,
            name: this.state.name,
            email: this.state.email,
            phone:this.state.phone,
        }
        ApiService.addAccount(account)
        .then(res =>{
            this.setState({
                message: account.name + '님이 성공적을 등록되었습니다.'
            })
            console.log(this.state.message);
            this.props.history.push('/accounts');
        })
        .catch( err =>{
            console.log('saveAccount() 에러',err);
        });
    }
    render(){
        return(
            <div>
                <Typography variant="h4" style={style} >Add Account</Typography>
                <form style={formContainer}>
                    <TextField type="text" placeholder='Enter your ID' name='id' fullWidth margin='normal'
                    value={this.state.id} onChange={this.onChange}/>
                    <TextField type="text" placeholder='Enter your password' name='pwd' fullWidth margin='normal'
                    value={this.state.pwd} onChange={this.onChange}/>
                    <TextField type="text" placeholder='Enter your Name' name='name' fullWidth margin='normal'
                    value={this.state.name} onChange={this.onChange}/>
                    <TextField type="text" placeholder='Enter your Email' name='email' fullWidth margin='normal'
                    value={this.state.email} onChange={this.onChange}/>
                    <TextField type="text" placeholder='Enter your PhoneNumber' name='phone' fullWidth margin='normal'
                    value={this.state.phone} onChange={this.onChange}/>
                    <Button variant='contained' color='primary' onClick={this.saveAccount}>Save</Button>
                </form>
            </div>
        );
    }
}

const formContainer ={
    display: 'flex',
    flexFlow: 'row wrap'
}

const style={
    display: ' flex',
    justifyContent: 'center'
}
export default AddAccountComponent;