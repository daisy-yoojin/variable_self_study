import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../state/reducer";
import { useStateValue } from "../state/StateProvider";
import "./Login.css";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="/images/speak.svg" alt="" />
        <h1>Sign in to App</h1>
        <p>daisy_.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
