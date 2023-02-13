import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

// utils import
import { useLocation } from "react-router-dom";

// Common files import
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Loader from "./components/common/Loader";

// Register pages import
import SignUp from "./components/forms/signup/signup";
import Register from "./components/forms/signup/Register";

// pages import
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Manage from "./components/pages/manage/ManageWaste";
import Company from "./components/pages/manage/Company";
import Subscription from "./components/pages/manage/Subscription";
import Profile from "./components/pages/profile/Profile";
import Testimonials from "./components/pages/Testimonials/Testimonials";

// Vendor dashboard import
import Dashboard from "./components/Vendor/Dashboard/Dashboard";
import Account from "./components/Vendor/Account/Account";
import Transaction from "./components/Vendor/Transaction/Transaction";
import VendorProfile from "./components/Vendor/Profile/Profile";
import Wallet from "./components/Vendor/Wallet/Wallet";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const DemoLoader = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    });
  };
  useEffect(() => {
    DemoLoader();
  }, []);
  console.log(loading);

  console.log(loading);
  const path = location.pathname;
  const path2 = window.location.pathname.split("/")[1];
  console.log(path2);
  const showNavPath = [
    "/",
    "/login",
    "/register",
    "/about",
    "/contact",
    "/manage-waste",
    "/profile",
    "/testimonials",
  ];
  const arr = showNavPath.find((pagePath, index) => {
    return pagePath === path;
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="App ">
          {path === arr || path2 === "manage-waste" ? (
            <Navbar path={path} />
          ) : (
            <Sidebar path={path} />
          )}
          <div
            className={` ${
              path === arr || path2 === "manage-waste" ? "md:mt-24 mt-8" : ""
            }  `}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<SignUp />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/manage-waste" element={<Manage />} />
              <Route path="/manage-waste/:id" element={<Company />} />
              <Route
                path="/manage-waste/subscription/:plan"
                element={<Subscription />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/vendor/transaction" element={<Transaction />} />
              <Route path="/vendor/account" element={<Account />} />
              <Route path="/vendor/profile" element={<VendorProfile />} />
              <Route path="/vendor/dashboard" element={<Dashboard />} />
              <Route path="/vendor/wallet" element={<Wallet />} />
            </Routes>
          </div>
          {path === arr ? <Footer /> : ""}
        </div>
      )}
    </>
  );
}

export default App;
