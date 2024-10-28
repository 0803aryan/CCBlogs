import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => console.log("Logout failed : ", error));
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
