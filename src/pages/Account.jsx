import React, { useContext } from "react";
import { useAuth } from "../context/AuthContextProvider";
import classes from "../style/Main.module.css";
import { useNavigate } from "react-router-dom";
import logoSpotify from "../assets/Spotify_Logo_CMYK_Black.png";
import change from "../style/Login.module.css";
import FormLayout from "../layouts/FormLayout/FormLayout";

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

  const { loading } = useContext();

  const navigate = useNavigate();

  async function handleChangePassword() {
    try {
      await refreshToken();
      await changePassword();
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
        </div>
        <div className={classes.mainForm}>
          <div className={classes.fromP}>
            <p>Email address or username</p>
          </div>
          <div className={change.inpurblock}>
            <input
              type="text"
              placeholder="current "
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            {loading ? (
              <button onClick={handleChangePassword}>Save</button>
            ) : (
              <button
                className={classes.btnLoad}
                onClick={handleChangePassword}
              >
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
      </div>
    </FormLayout>
  );
};

export default Account;
