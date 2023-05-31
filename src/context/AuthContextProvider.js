import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";

export const authContext =  createContext();
export const useAuth = () => useContext(authContext);
export const API = 'http://34.125.87.211';


const AuthContextProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const navigate = useNavigate()

  async function handleRegister(formData,email) {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/accounts/register/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      navigate("/");
    } catch (error) {
      setError(Object.values(error.response.data));
    } finally {
      setLoading(false);
    }
  }
  
  async function handleLogin(formData, email) {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/accounts/login/`, formData);
      // console.log(res);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      setError(Object.values(error.response.data));
    } finally {
      setLoading(false);
    }
  }

  async function checkAuth() {
    try {
      setLoading(true);
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios.post(`${API}/accounts/logout/`, {
        refresh_token: tokens.refresh,
        title: "Refresh token",
      });
      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: res.data.access, refresh: tokens.refresh })
      );
      const email = localStorage.getItem("email");
      setCurrentUser(email);
  
      console.log("Обновленный токен:", res.data.access);
    } catch (error) {
      console.log(error);
      handleLogout();
    } finally {
      setLoading(false);
    }
  }
  
  

  function handleLogout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(null);
    navigate("/");
  }

  async function resetPassword (email) {
    try {
      await axios.post(`${API}/accounts/password-reset/`,{email} );
    } catch (error) {
      console.log(error);
    }
  }


  async function changePassword() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const response = await axios.post(`${API}/accounts/change_password/`, {
        current_password: currentPassword,
        new_password: newPassword,
        confirm_password: confirmPassword
      }, {
        headers: {
          Authorization: `Bearer ${tokens.access}`
        }
      });
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    handleRegister,
    loading,
    error,
    setError,
    currentUser,
    handleLogin,
    checkAuth,
    handleLogout,
    setCurrentUser,
    resetPassword,
    changePassword,
    currentPassword,
    newPassword,
    confirmPassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmPassword
  };
  return (
    <authContext.Provider value={values}>{children}</authContext.Provider>
  )
}

export default AuthContextProvider