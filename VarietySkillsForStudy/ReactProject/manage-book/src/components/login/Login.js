import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AuthenticationService from "../../AuthenticationService";

const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const isClose = () => {};
  const isOpen = () => {};

  const isEmail = (text)=>{
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(text); // 형식에 맞는 경우 true 리턴    
  }

  const loginIdHandler = useCallback((e) => {
    e.preventDefault();
    const text = e.target.value;
     // true vs. false
    setId(text);
    
  }, []);

  const loginPwdHandler = useCallback((e) => {
    setPwd(e.target.value);
  }, []);

  const loginClickHandler = useCallback((e) => {
    // validate email
    const state = isEmail(id);
    if(state){
      // set id
      console.log('이메일 형식입니다.')      
    }else{
      console.log('이메일 형식이 아닙니다.')
    }

    AuthenticationService.login(id, pwd)
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        console.log("loggin Error!");
      });
    setId((e.target.value = ""));
    setPwd((e.target.value = ""));
  },[id,pwd]);

  return (
    <div>
      <div className="loginModal">
        <Box flexDirection="row-reverse">
          <span className="close" onClick={isClose}>
            &times;
          </span>
        </Box>
        <div className="modalContents" onClick={isOpen}>
          <div>
            <AccountBoxIcon />
            <input
              value={id}
              placeholder="Enter your ID"
              onChange={loginIdHandler}
            />
          </div>
          <div>
            <VpnKeyIcon />
            <input
              type="password"
              value={pwd}
              placeholder="Enter your Password"
              onChange={loginPwdHandler}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            className="loginBtn"
            onClick={loginClickHandler}
          >
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
