import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import {auth,provider} from './firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';
import logo from './connectbooklogo.png';
import name from './name.png';

function Login() {
    const [state,dispatch]=useStateValue();
    // sign in 
    const signIn=()=>{
       auth.signInWithPopup(provider)
       .then(result=>{
           dispatch({
               type:actionTypes.SET_USER,
               user:result.user,
           })
         
       }).catch((error)=>alert(error.message));
    }
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src={logo}
          alt=""
        />
        <img
          src={name}
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
