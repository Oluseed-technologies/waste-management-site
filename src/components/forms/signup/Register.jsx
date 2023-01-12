import { useState } from "react";
import { NavLink } from "react-router-dom";
import largebg from "../../../assets/largebg.png";
import { motion } from "framer-motion";
import { Inputs } from "./FormInputs";
import { Validate } from "../ValidateForm";
import { ToastContainer, Zoom } from "react-toastify";
import {
  ErrorNotification,
  InfoNotification,
  SuccessNotification,
} from "../../common/ErrorToast";
import "react-toastify/dist/ReactToastify.css";
import FormComplete from "./FormComplete";
import { InputComponent } from "../../common/InputComponent";
import { RegisterInput } from "./FormInputs";

const Register = () => {
  const [values, setValues] = useState(RegisterInput);
  const [open, setOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleValues = (e) => {
    // setValues({ ...values, [e.target.name]: e.target.value });
    setFormErrors(Validate(values));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    console.log(values);
    console.log("welcome bro");
    // console.log(values);
    // if (Object.keys(values).length === 0) {
    //   ErrorNotification("Inputs field cannot be empty");
    //   return;
    // } else if (Object.keys(formErrors).length === 0) {
    //   SuccessNotification("User logged signup successfully ");
    //   console.log("User logged signup successfully ");
    //   return;
    // }

    // console.log(formErrors);
    // if (Object.values(formErrors) !== 0) {
    //   ErrorNotification(Object.values(formErrors)[0]);
    // }
    // console.log(Object.values(formErrors));
  };

  return (
    <>
      <FormComplete open={open} setOpen={setOpen} />
      <ToastContainer transition={Zoom} autoClose={800} />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ background: `url(${largebg})` }}
        className="Login py-1 md:py-24"
      >
        <div className="md:flex scale-75 md:scale-100 flex-col items-center  justify-center">
          <div className="bg-white shadow-lg rounded-xl p-8 ">
            <h1 className="text-2xl text-primary  text-center font-semibold">
              Sign Up
            </h1>
            <form>
              <div className="my-2  block ">
                <InputComponent
                  name="firstName"
                  values={values}
                  label="First Name"
                  setValues={setValues}
                  type="text"
                  placeholder="First Name"
                />
                <InputComponent
                  name="lastName"
                  values={values}
                  label="Last Name"
                  setValues={setValues}
                  type="text"
                  placeholder="Last Name"
                />

                <InputComponent
                  name="password"
                  values={values}
                  label="Password"
                  setValues={setValues}
                  type="password"
                  placeholder="Password"
                />
                <InputComponent
                  name="confirmPassword"
                  values={values}
                  label="Confirm Password"
                  setValues={setValues}
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="bg-primary block md:w-48 w-full my-2 rounded-md text-white py-2 font-mont"
                >
                  Sign In
                </button>
              </div>
            </form>
            <p className="text-sm my-3 text-center">
              Have an acount?{" "}
              <NavLink to="/login" className="text-primary">
                Sign In
              </NavLink>{" "}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Register;
