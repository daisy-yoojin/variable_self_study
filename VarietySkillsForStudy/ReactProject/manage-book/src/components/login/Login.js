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

  const loginIdHandler = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const loginPwdHandler = useCallback((e) => {
    setPwd(e.target.value);
  }, []);

  const loginClickHandler = useCallback((e) => {
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
              placeholder="Enter yout ID"
              onChange={loginIdHandler}
            />
          </div>
          <div>
            <VpnKeyIcon />
            <input
              type="password"
              value={pwd}
              placeholder="Enter yout Password"
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
