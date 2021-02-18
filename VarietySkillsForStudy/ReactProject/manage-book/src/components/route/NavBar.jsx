import React,{Component} from 'react';
import SignIn from './../login/SignIn'
//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import LeftNavBar from './LeftNavBar';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false,
            isLeftNavOpen:false,
        };
    }
    openLeftNav = ()=>{
        this.setState({isLeftNavOpen: true});
    }
    clsoeLeftNav = ()=>{
        this.setState({isLeftNavOpen: false});
    }

    openModal = ()=>{
        this.setState({isModalOpen: true});
    }

    closeModal=()=>{
        this.setState({isModalOpen: false});
    }

    render(){
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu" onClick={this.openLeftNav}>                            
                        </IconButton>                        
                            <LeftNavBar isOpen={this.state.isLeftNavOpen} isClose={this.clsoeLeftNav}/>
                        <Typography variant="h6" style={style}>
                            App
                        </Typography>
                        <Button color='inherit' onClick={this.openModal}>Login</Button>
                        <SignIn isOpen={this.state.isModalOpen} isClose={this.closeModal}/>
                    </Toolbar>
                </AppBar>
            </div>
        );
        
    }
}

const style ={
    flexGrow: 1
}
export default NavBar;
