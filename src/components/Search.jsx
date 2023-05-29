import React, { useCallback, useEffect, useRef, useState } from "react";
import navbar from "../style/Navbar.module.css";
import right from "../assets/chevron_big_right.svg";
import left from "../assets/chevron_big_left.svg";
import users from "../assets/Line=empty, Name=friends.svg";
import login_user from "../assets/Line=empty, Name=UserCircle.svg";
import { useNavigate } from "react-router";
import Modal from "react-modal";
import { useAuth } from "../context/AuthContextProvider";
Modal.setAppElement("#root");

const Search = () => {
  // !-----------------
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const { currentUser, setCurrentUser, handleLogout } = useAuth();
  // console.log(currentUser);
  //! For modaalwindow
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleIconClick = () => {
    if (isModalOpen) {
      closeModal();
    } else {
      openModal();
    }
  };

  const handleOutsideClick = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    },
    [modalRef, closeModal]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen, handleOutsideClick]);

  // !

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setCurrentUser(email);
  }, []);
  // !=================
  return (
    <>
      <div
        className={scrolled ? navbar.line_container_1 : navbar.line_container}
      >
        <div className={navbar.line_left}>
          <div className={navbar.line_arrow_left}>
            <img src={left} alt="" />
            {/* &lsaquo; */}
          </div>
          <div className={navbar.line_arrow_left}>
            {/* &rsaquo; */}
            <img src={right} alt="" />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Что хочешь послушать "
          />
        </div>

        <div className={navbar.line_right}>
          {!currentUser ? (
            <>
              <button
                className={navbar.reg_btn}
                onClick={() => {
                  navigate("/registration");
                }}
              >
                Sign up
              </button>
              <button
                className={navbar.log_btn}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>{" "}
            </>
          ) : null}
          {currentUser ? (
            <>
              <div className={navbar.line_arrow_left}>
                <img src={users} alt="" />
              </div>
              <div className={navbar.line_arrow_left} onClick={handleIconClick}>
                <img src={login_user} alt="" />
              </div>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                overlayClassName="custom-overlay"
                className="custom-modal"
              >
                <div className={navbar.modal_window}>
                  <div className={navbar.textBlock}>
                    <button>Account</button>
                  </div>
                  <div className={navbar.textBlock}>
                    <button>Profule</button>
                  </div>
                  <div className={navbar.textBlock}>
                    <button>Settings</button>
                  </div>
                  <hr></hr>
                  <div className={navbar.textBlock}>
                    <button onClick={handleLogout}>Log out</button>
                  </div>
                </div>
              </Modal>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Search;
