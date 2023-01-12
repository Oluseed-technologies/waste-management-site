import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import largebg from "../../../assets/largebg.png";
import { InputComponent } from "../../common/InputComponent";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./FormComplete";
import { LoginInput } from "./FormInputs";
const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(LoginInput);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yeah");
    console.log(values);
    // setOpen(true);
    navigate("/vendor/dashboard");
  };
  console.log(open);
  return (
    <>
      <ModalComponent open={open} setOpen={setOpen} />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ background: `url(${largebg})` }}
        className="Login md:py-36 py-24 relative "
      >
        <div className="flex md:scale-100 scale-75 z-10  flex-col items-center  jusify-center">
          <div className="bg-white shadow-lg w-72 rounded-xl p-8 ">
            <h1 className="text-2xl text-primary  text-center font-semibold">
              Sign In
            </h1>
            <form className="my-5 ">
              <InputComponent
                name="email"
                label="Email"
                type="email"
                values={values}
                setValues={setValues}
              />
              <InputComponent
                name="password"
                label="Password"
                type="password"
                values={values}
                setValues={setValues}
              />

              <button
                onClick={handleSubmit}
                className="bg-primary w-full my-2 rounded-md text-white py-2 font-mont"
              >
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
