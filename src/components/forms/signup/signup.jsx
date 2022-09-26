import { NavLink } from "react-router-dom";
import largebg from "../../../assets/largebg.png";
import { motion } from "framer-motion";
const Login = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ background: `url(${largebg})` }}
        className="Login py-36"
      >
        <div className="flex flex-col items-center  jusify-center">
          <div className="bg-white shadow-lg rounded-xl p-8 ">
            <h1 className="text-2xl text-primary  text-center font-semibold">
              Sign In
            </h1>
            <form className="my-5">
              <div className="form-input flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="email"
                  style={{ border: "1px solid #838383" }}
                  className=" p-2 text-dark2rounded-sm my-2 shadow-sm"
                />
              </div>
              <div className="form-input flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  style={{ border: "1px solid #838383" }}
                  className=" p-2 my-2 text-dark2 font-light rounded-sm shadow-sm"
                />
              </div>
              <button className="bg-primary w-full my-2 rounded-md text-white py-2 font-mont">
                Sign In
              </button>
            </form>
            <p className="text-sm my-3 text-center">
              Don't have an account?{" "}
              <NavLink to="/register" className="text-primary">
                Sign Up
              </NavLink>{" "}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Login;
