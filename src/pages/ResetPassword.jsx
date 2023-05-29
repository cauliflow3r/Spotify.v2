import React from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { resetPassword } = useAuth();

  const navigate = useNavigate();

  return (
    <>
      <div>
        <input type="text" placeholder="Enter email adress.." />
        <button onClick={resetPassword}>Send</button>
      </div>
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        profile
      </button>
    </>
  );
};

export default ResetPassword;
