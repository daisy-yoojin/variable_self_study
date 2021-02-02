import React, {Component} from 'react';
import { Link } from "react-router-dom";

// Material-UI
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

class SignIn extends Component{
    state={
        id:'',
        pwd:'',
    };

    loginHandler = (e)=>{
        const {name,value} = e.target;
        this.setState({[name]: value});
    };

    loginClickHandler = ()=>{
        const {id, pwd} = this.state;
        // fetch("http://10.58.2.17:8000/auth/login",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json",

        //     },
        //     body:JSON.stringify({
        //         id,
        //         pwd,
        //     }),
        // })
        // .then((res)=>{res.json();})
        // .then((res)=>{console.log(res);})

    };

    render(){
        const {isOpen, isClose} = this.props; // parent value
        return(
            <div>
                {isOpen?
                    (
                        <div className='modal'>
                            <div onClick={isClose}>
                                <div className='loginModal'>
                                    <Box flexDirection="row-reverse">
                                        <span className='close' onClick={isClose}>
                                            &times;
                                        </span>
                                    </Box>
                                    <div className="modalContents" onClick={isOpen}>
                                        <div>
                                            <AccountBoxIcon/>
                                            <input type='text' name='id' className='loginId' placeholder='Enter yout ID' onChange={this.loginHandler}/>
                                        </div>
                                        <div>
                                            <VpnKeyIcon/>
                                            <input type='password' name='pwd' className='loginPwd' placeholder='Enter yout Password' onChange={this.loginHandler}/>
                                        </div>
                                        <Button variant="contained" color="primary" className='loginBtn' onClick={this.loginClickHandler}>
                                        로그인
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ):null
                }
            </div>
        );
    }

}

export default SignIn;