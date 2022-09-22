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
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 1, y: "0%", height : 'auto' },
    closed: { opacity: 0, y: "-100%" , height : '0'},
  };
  
  console.log(isOpen);
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

 <motion.nav layout animate={isOpen ? "open" : "closed"}
      variants={variants} className='hidden'>
        <ul className="   md:flex  items-center font-medium justify-between">
          <NavLink to="/">
            <li className="mx-3 hover:bg-sky-blue">Home</li>
          </NavLink>
          <NavLink to="/about">
            <li className="mx-3">About Us</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="mx-3">Contact</li>
          </NavLink>
          <NavLink to="/testimonials">
            <li className="mx-3">Testimonials</li>
          </NavLink>
          <NavLink to="/manage-waste">
            <li className="mx-3">Manage Waste</li>
          </NavLink>
        </ul>
      </motion.nav>

        <motion.nav  animate={isOpen ? "open" : "closed"}
      variants={variants} className="hidden md:hidden">
        <ul className="">
          <li onClick={() => navigate('/profile')} className="mx-3">Profile</li>
          <div className="btns my-2">
            <button onClick={() => navigate('/login')}  className="ml-3 bg-primary text-white rounded-sm font-mont mr-5 px-5 py-2">
              Log in
            </button>
            <button onClick={() => navigate('/register')}  className="ml-3 border-primary text-primary rounded-sm ml-5 font-mont px-5 py-2">
              Sign in
            </button>
          </div>
        </ul>
      </motion.nav>



    <header className=" block md:flex  items-center justify-around py-0 md:py-6">
      <div className="hidden md:block logo mx-2">
        <Logo />
      </div>


      <nav >
        <ul className=" hidden  md:flex  items-center font-medium justify-between">
          <NavLink to="/">
            <li className="mx-3 hover:bg-sky-blue">Home</li>
          </NavLink>
          <NavLink to="/about">
            <li className="mx-3">About Us</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="mx-3">Contact</li>
          </NavLink>
          <NavLink to="/testimonials">
            <li className="mx-3">Testimonials</li>
          </NavLink>
          <NavLink to="/manage-waste">
            <li className="mx-3">Manage Waste</li>
          </NavLink>
        </ul>
      </nav>


      <nav className="hidden md:block ">
        <ul className="block  md:flex justify-between items-center">
          <NavLink to="/login">
            <li className="mx-3">Sign in</li>
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
