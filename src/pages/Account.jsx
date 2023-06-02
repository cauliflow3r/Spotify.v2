import React, { useState } from "react";
import { useAuth } from "../context/AuthContextProvider";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useNavigate } from "react-router-dom";
import logoSpotify from "../assets/Spotify_Logo_CMYK_Black.png";
import claschangeses from "../style/Login.module.css";
import FormLayout from "../layouts/FormLayout/FormLayout";
import { authContext, useAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { resetPassword, loading } = useAuth(authContext);
  const [inpReset, setInpReset] = useState("");
  const navigate = useNavigate();
  console.log(inpReset)

const Account = () => {
  const {
    currentUser,
    changePassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmPassword,
    currentPassword,
    newPassword,
    confirmPassword,
    refreshToken,
  } = useAuth();

  const navigate = useNavigate();

  async function handleChangePassword() {
    try {
      await refreshToken(); // Обновляем токен перед сменой пароля
      await changePassword(); // Выполняем смену пароля
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FormLayout>
    <div className={classes.wrapper}>
      <div className={classes.imgBox}>
        <img src={logoSpotify} alt="logo" />
      </div>
      <hr />
      <div className={classes.textBox}>
        <h1>Change password</h1>
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
        <input
          type="text"
          placeholder="Enter Email address adress.."
          onChange={(e) => setInpReset(e.target.value)}
        />
        {loading ? (
          <button onClick={handleSave}>Send</button>
        ) : (
          <button className={classes.btnLoad} onClick={handleSave}>
            <div className={classes.wave}>
              <div className={classes.ball}></div>
              <div className={classes.ball}></div>
              <div className={classes.ball}></div>
              <div className={classes.ball}></div>
              <div className={classes.ball}></div>
            </div>
          </button>
        )}
      </div>
      <div className={classes.support}>
        <span>If you still need help, contact Spotify Support</span>
      </div>
    </div>


    <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <h2>ACCOUNT</h2>
          <div className={classes.infoContainer}>
            <div className={classes.email}>
              <span>User email </span>
              <p> &nbsp; : &nbsp;{currentUser}</p>
            </div>
          </div>
          <div className={classes.ChangeBlock}>
            <p>Change Passwor : &nbsp;</p>
            <div className={classes.inpurblock}>
              <input
                type="text"
                placeholder="current "
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="new"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="confirm "
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button onClick={handleChangePassword}>change</button>
            </div>
          </div>
        </div>
      </div>
  </FormLayout>
  );
};

export default Account;
