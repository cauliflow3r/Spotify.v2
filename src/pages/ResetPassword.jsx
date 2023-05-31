import React from "react";
import { useNavigate } from "react-router-dom";
import logoSpotify from "../assets/Spotify_Logo_CMYK_Black.png";
import classes from "../style/Login.module.css";
import FormLayout from "../layouts/FormLayout/FormLayout";
import { useAuth } from "../context/AuthContextProvider";

const ResetPassword = () => {
  const { resetPassword } = useAuth();

  return (
    <FormLayout>
      <div className={classes.wrapper}>
        <div className={classes.imgBox}>
          <img src={logoSpotify} alt="logo" />
        </div>
        <hr />
        <div className={classes.textBox}>
          <h1>Password Reset</h1>
          <p>
            Enter your <b>Spotify username</b>, or the <b>email address</b> that
            you used to register. We'll send you an email with your username and
            a link to reset your password.
          </p>
        </div>
        <div className={classes.mainForm}>
          <div className={classes.fromP}>
            <p>Email address or username</p>
          </div>
          <input type="text" placeholder="Enter Email address adress.." />
          <button onClick={resetPassword}>Send</button>
        </div>
        <div className={classes.support}>
          <span>If you still need help, contact Spotify Support</span>
        </div>
      </div>
    </FormLayout>
  );
};

export default ResetPassword;
