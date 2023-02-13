// Navbar
import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import Logo from "../Logo/Logo";
import profileImg from "../../../assets/profile1.png";
import menu from "../../../assets/menu.png";
import cancel from "../../../assets/cancel.png";
import siteLogo from "../../../assets/logo.png";
import { Routes } from "./Routes";

const Navbar = ({ path }) => {
  console.log(Routes);
  const navigate = useNavigate();
  console.log(path);

  const closeRoute = () => {
    setIsOpen(false);
  };

  const renderRoutes = Routes.map((data, index) => {
    return (
      <NavLink key={index} onClick={closeRoute} className="" to={data.path}>
        <li
          className={` ${
            path == data.path ? "border-b-2 border-green-500" : ""
          } mx-3  py-2 `}
        >
          {data.name}
        </li>
      </NavLink>
    );
  });
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 1, y: "0%", height: "auto", weight: "auto" },
    closed: { opacity: 0, y: "-100rem", height: "0", weight: "0" },
  };

  const handleLogin = () => {
    setIsOpen(false);
    navigate("/login");
  };
  const handleRegister = () => {
    setIsOpen(false);
    navigate("/register");
  };

  console.log(isOpen);
  return (
    <>
      <nav
        style={{ background: "#C3D9C2" }}
        className="flex px-2 md:hidden py-2 fixed top-0 left-0 right-0 z-50   justify-between items-center"
      >
        <span onClick={() => navigate("/")}>
          {" "}
          <img className="w-12" alt="logo" src={siteLogo} />{" "}
        </span>
        <div className="">
          {isOpen ? (
            <span onClick={() => setIsOpen((isOpen) => !isOpen)}>
              <img src={cancel} alt="menu" />{" "}
            </span>
          ) : (
            <span onClick={() => setIsOpen((isOpen) => !isOpen)}>
              <img src={menu} alt="cancel" />{" "}
            </span>
          )}
        </div>
      </nav>

      <motion.nav
        layout
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="hidden bg-light"
      >
        <ul className="   md:flex pt-14 items-center font-medium justify-between">
          {renderRoutes}
        </ul>
      </motion.nav>

      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="hidden bg-light  md:hidden"
      >
        <ul className="py-2">
          <NavLink onClick={closeRoute} to="/profile">
            <p className="mx-3  py-2">Profile</p>
          </NavLink>
          {/* <li onClick={() => navigate('/profile')} className="mx-3">Profile</li> */}
          <div className="btns my-2">
            <button
              onClick={handleLogin}
              className="ml-3 bg-primary text-white rounded-sm font-mont mr-5 px-5 py-2"
            >
              Log in
            </button>
            <button
              onClick={handleRegister}
              className="ml-3 border-primary text-primary rounded-sm ml-5 font-mont px-5 py-2"
            >
              Sign in
            </button>
          </div>
        </ul>
      </motion.nav>

      <header
        style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
        className=" hidden md:flex fixed  top-0 border-2 border-b-white z-50 left-0 right-0  items-center justify-around py-0 md:py-2"
      >
        <div className="hidden md:block logo mx-2">
          <Logo />
        </div>

        <nav>
          <ul className=" hidden  md:flex  items-center font-medium justify-between">
            {renderRoutes}
          </ul>
        </nav>

        <nav className="hidden md:block ">
          <ul className="block  md:flex justify-between items-center">
            <NavLink to="/login">
              <li
                className={` ${
                  path == "/login" ? "border-b-2 border-green-500" : ""
                } mx-3 `}
              >
                Sign in
              </li>
            </NavLink>
            <button
              onClick={() => navigate("/register")}
              className="mx-3 bg-primary text-white rounded-md font-mont px-5 py-2"
            >
              Register
            </button>
            <NavLink to="/profile">
              <img
                src={profileImg}
                className="block "
                alt="profile  pics"
                width="80"
              />
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
