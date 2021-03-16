import React, { Component } from "react";
import { Link } from "react-router-dom";

// Material-UI
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
// import AuthenticationService from "../../AuthenticationService";

class SignIn extends Component {
  state = {
    id: "",
    pwd: "",
  };

  loginHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  loginClickHandler = () => {
    const { id, pwd } = this.state;
    // AuthenticationService.login(id, pwd)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch(() => {
    //     console.log("loggin Error!");
    //   });
  };

  render() {
    const { isOpen, isClose } = this.props; // parent value
    return (
      <div>
        {isOpen ? (
          <div className="modal">
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
                      type="text"
                      name="id"
                      value={this.state.id}
                      className="loginId"
                      placeholder="Enter yout ID"
                      onChange={this.loginHandler}
                    />
                  </div>
                  <div>
                    <VpnKeyIcon />
                    <input
                      type="password"
                      value={this.state.pwd}
                      name="pwd"
                      className="loginPwd"
                      placeholder="Enter yout Password"
                      onChange={this.loginHandler}
                    />
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    className="loginBtn"
                    onClick={this.loginClickHandler}
                  >
                    로그인
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SignIn;
