import React from "react";
import { useAuth } from "../../context/AuthContextProvider";

const Profile = () => {
  const {
    changePassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmPassword,
  } = useAuth();
  return (
    <div>
      <input
        type="text"
        placeholder="current "
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="new"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="confirm "
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={changePassword}>change</button>
    </div>
  );
};

export default Profile;
