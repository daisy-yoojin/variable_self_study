import React, {Component} from 'react';
import ApiService from "../../ApiService";

//Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

class AccountListComponent extends Component{
    state ={
        word: '',
    }
    constructor(porps){
        super(porps);
        
        this.state={
            accounts: [],
            message:null,
        }
    }

    componentDidMount(){
        this.reloadAccountList();
    }

    // function for search
    searchAccount =(word)=>{
        ApiService.fetchAccountByName(word)
        .then(res=>{
            this.setState({
                accounts:res.data
            })
        })
        .catch(err=>{
            console.log('searchAccount(word) ERROR!', err);
        })
        // console.log(this.state.accounts);
    }

    reloadAccountList = ()=>{
        ApiService.fetchAccount()
        .then(res=>{
            this.setState({
                accounts:res.data
            })
        })
        .catch(err=>{
            console.log('reloadAccountList() ERROR!', err);
        }) 
    }

    deleteAccount = (accountId)=>{
        ApiService.deleteAccount(accountId)
        .then( res => {
            this.setState({
                message: 'Account Deleted Successfully.'
            });
            this.setState({
                accounts: this.state.accounts.filter( account=> 
                    account.id !== accountId)
            });
        })
        .catch(err =>{
            console.log('deleteAccount() ERROR!', err);
        })
    }

    editAccount = (id) => {
        window.localStorage.setItem("accountId",id);
        this.props.history.push('/edit-account');
    }
    
    addAccount = () => {
        window.localStorage.removeItem("accountId");
        this.props.history.push('/add-account');
    }

    handleChange = (e)=>{
        e.preventDefault();
        this.setState({
            word: e.target.value
        })
        // console.log(this.state.word);
        this.searchAccount(this.state.word);
    }

    render(){
        return(
            <div>
                <Typography variant="h4" style={style}>Account List</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={2}>
                        <Button variant="contained" color="primary" onClick={this.addAccount}>계정 등록</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}></Grid>
                    {/* Search */}
                    <Grid item xs={12} sm={3}>
                        {/* ||'' : input의 value가 undefined일 때 ''가 들어올 수 있도록 한다. */}
                        <TextField type="text" placeholder='Enter your KeyWord' fullWidth margin='normal' value={this.state.word|| ''} onChange={this.handleChange}/>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Button variant="contained" color="primary" onClick={()=>this.searchAccount(this.state.word)}>검색</Button>
                    </Grid>
                </Grid>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            {/* <TableCell>Password</TableCell> */}
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell align="right" >Edit</TableCell>
                            <TableCell align="right" >Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.accounts.map( account=>
                            <TableRow key={account.id}>
                                <TableCell>{account.id}</TableCell>
                                {/* <TableCell ><input type="password" value={account.pwd} readOnly/></TableCell> */}
                                <TableCell>{account.name}</TableCell>
                                <TableCell>{account.email}</TableCell>
                                <TableCell>{account.phone}</TableCell>
                                <TableCell align="right" onClick={()=> this.editAccount(account.id)}>
                                    <CreateIcon/>
                                </TableCell>
                                <TableCell align="right" onClick={()=> this.deleteAccount(account.id)}>
                                    <DeleteIcon/>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
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

export default AccountListComponent;