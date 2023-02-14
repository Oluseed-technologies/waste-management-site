import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../../../assets/light-logo.png";
import dashboard from "../../../assets/dashboard.png";
import wallet from "../../../assets/wallet.png";
import users from "../../../assets/users.png";
import user from "../../../assets/user.png";
import logout from "../../../assets/logout.png";
import LinkRoute from "./LinkRoute.json";
import Logo from "../Logo/Logo";
import menu from "../../../assets/menu.png";
import cancel from "../../../assets/cancel.png";
import siteLogo from "../../../assets/logo.png";
const Sidebar = ({ path }) => {
  const navigate = useNavigate();
  const images = [dashboard, user, wallet, user, wallet];
  const [isOpen, setIsOpen] = useState(false);

  const closeRoute = () => {
    setIsOpen(false);
  };

  const variants = {
    open: { opacity: 1, x: "0%", height: "auto", weight: "auto" },
    closed: { opacity: 0, x: "-100rem", height: "0", weight: "0" },
  };

  const renderRoute = LinkRoute.map((data, index) => {
    return (
      <Link
        onClick={closeRoute}
        key={index}
        className={` ${
          path === data.path ? "bg-secondary" : ""
        }  p-4  flex rounded-l-full md:my-4 items-center   block`}
        to={`${data.path}`}
      >
        <span>
          <img src={images[index]} alt="img" />
        </span>
        <span className="px-5">{data.name}</span>
      </Link>
    );
  });
  return (
    <>
      <nav
        style={{ background: "#C3D9C2" }}
        className="flex px-2 md:hidden py-2   justify-between items-center"
      >
        <span onClick={() => navigate("/")}>
          {" "}
          <img className="w-12" src={siteLogo} />{" "}
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
        className={`${
          isOpen ? "block" : "hidden"
        } bg-primary py-3 text-white  md:hidden `}
      >
        <div className="md:hidden">{renderRoute}</div>
        <div
          onClick={() => navigate("/login")}
          className="text-center rounded-3xl  w-48 md:hidden text-xl font-semibold flex items-center mx-3 bg-wht p- text-secondary "
        >
          <span>
            <img className="w-5 my-4 mx-2" src={logout} alt="logout" />
          </span>
          <p>Logout</p>
        </div>
      </motion.nav>
      <aside
        className={` hidden bg-primary overflow-y-scroll sidebar-scrollbar md:block fixed top-0 py-10 pb-52 left-0  shadow-2xl `}
      >
        <div className="w-24 mx-auto">
          <img src={logo} alt="logo" />
        </div>
        <ul className=" font-semibold text-base pl-4 text-white py-6">
          {renderRoute}
        </ul>
        <div
          onClick={() => navigate("/login")}
          className="text-center rounded-3xl mx-3 text-2xl font-semibold flex items-center justify-around bg-white p-4 text-secondary "
        >
          <span>
            <img className="w-6" src={logout} alt="logout" />
          </span>
          <p>Logout</p>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
