// Navbar
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import profileImg from "../../../assets/profile1.png";
const Navbar = () => {
  return (
    <header className="block  md:flex items-center justify-around py-6">
      <div className="logo mx-2">
        <Logo />
      </div>
      <nav>
        <ul className=" block  md:flex  items-center font-medium justify-between">
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
          <li className="mx-3">Sign In</li>
          <button className="mx-3 bg-primary text-light rounded-md font-mont px-5 py-2">
            Register
          </button>
          <img
            src={profileImg}
            className="block "
            alt="profile  pics"
            width="80"
          />
        </ul>
      </nav>
      <nav className="block md:hidden">
        <ul className="">
          <li className="mx-3">Profile</li>
          <div className="btns my-2">
            <button className="ml-3 bg-primary text-light rounded-sm font-mont mr-5 px-5 py-2">
              Log in
            </button>
            <button className="ml-3 border-primary text-primary rounded-sm ml-5 font-mont px-5 py-2">
              Sign in
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
