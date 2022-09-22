import { Link, useLocation, useNavigate } from "react-router-dom";
import {useState} from 'react'
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
  const images = [dashboard, user, wallet, user];
   const [isOpen, setIsOpen] = useState(false);

  const renderRoute = LinkRoute.map((data, index) => {
    return (
      <Link
        key={index}
        className={` ${
          path === data.path ? "bg-secondary" : ""
        }  p-4  flex rounded-l-full my-8 items-center   block`}
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
     <nav style={{"background": "#C3D9C2"}} className='flex px-2 md:hidden py-2   justify-between items-center'>
    <span> <img className='w-12' src ={siteLogo} /> </span>
       <div className="">
        {isOpen ? (
          <span onClick={() => setIsOpen(isOpen => !isOpen)}>
            <img src={cancel} alt="menu" />{" "}
          </span>
        ) : (
          <span onClick={() => setIsOpen(isOpen => !isOpen)}>
            <img src={menu} alt="cancel" />{" "}
          </span>
        )}
      </div>
     </nav>
      <aside className={` hidden bg-primary   md:block fixed top-0 bottom-0 py-10 left-0  shadow-2xl `}>
        <div className="w-24 mx-auto">
          <img src={logo} alt="logo" />
        </div>
        <ul className=" font-semibold text-xl pl-4 text-white py-12">
          {renderRoute}
        </ul>
        <div
          onClick={() => navigate("/login")}
          className="text-center rounded-3xl mx-3 text-2xl font-semibold flex items-center justify-around bg-white p-6 text-secondary "
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
