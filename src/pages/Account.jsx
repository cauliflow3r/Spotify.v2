import React from "react";
import { useAuth } from "../context/AuthContextProvider";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useNavigate } from "react-router-dom";

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
    <MainLayout>
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
    </MainLayout>
  );
};

export default Account;
