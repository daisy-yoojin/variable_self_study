import React, {Component} from 'react';
import ApiService from '../../ApiService';

//Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditAccountComponent extends Component{
    
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
    componentDidMount(){
        this.loadAccount();
    }
    loadAccount= ()=>{
        ApiService.fetchAccountById(window.localStorage.getItem('accountId'))
        .then(res =>{
            let account = res.data;
            this.setState({
                id: account.id,
                pwd: account.pwd,
                name: account.name,
                email: account.email,
                phone: account.phone

            })
        })
        .catch(err => {
            console.log('loadAccount() 에러', err);
        })
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
        ApiService.editAccount(account)
        .then(res =>{
            this.setState({
                message: account.name + '님이 성공적을 수정되었습니다.'
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
                <Typography variant='h4' style={style}> Edit Account</Typography>
                <form>
                    <TextField type="text standard-read-only-input" placeholder='Edit your ID' name='id' fullWidth margin='normal'
                    value={this.state.id} onChange={this.onChange} InputProps={{readOnly: true,}}/>
                    <TextField type="password" placeholder='Edit your password' name='pwd' fullWidth margin='normal'
                    value={this.state.pwd} onChange={this.onChange}/>
                    <TextField type="text" placeholder='Edit your Name' name='name' fullWidth margin='normal'
                    value={this.state.name} onChange={this.onChange}/>
                    <TextField type="text" placeholder='Edit your Email' name='email' fullWidth margin='normal'
                    value={this.state.email} onChange={this.onChange}/>
                    <TextField type="text" placeholder='Edit your PhoneNumber' name='phone' fullWidth margin='normal'
                    value={this.state.phone} onChange={this.onChange}/>
                    <Button variant='contained' color='primary' onClick={this.saveAccount}>Save</Button>
                </form>
            </div>
        );
    }
}

const style={
    display: 'flex',
    justifyContent: 'center',
    color: '#000000',
    fontWeight:800,
}

export default EditAccountComponent;