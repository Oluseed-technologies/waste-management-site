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
import SweetAlert2 from "react-sweetalert2";
const Register = () => {
  const [values, setValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [swalProps, setSwalProps] = useState({});
  const [show, setShow] = useState(false);

  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setFormErrors(Validate(values));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    if (Object.keys(values).length === 0) {
      ErrorNotification("Inputs field cannot be empty");
      return;
    } else if (Object.keys(formErrors).length === 0) {
      SuccessNotification("User logged signup successfully ");
      console.log("User logged signup successfully ");
      return;
    }

    console.log(formErrors);
    if (Object.values(formErrors) !== 0) {
      ErrorNotification(Object.values(formErrors)[0]);
    }
    console.log(Object.values(formErrors));
  };

  const renderInputs = Inputs.map((data, index) => {
    return (
      <div key={data.name} className="form-input flex flex-col">
        <label
          style={{ color: " #565656" }}
          className="md:text-base text-xl"
          htmlFor={data.label}
        >
          {data.label}
        </label>
        <input
          name={data.name}
          onChange={handleValues}
          type={data.type}
          placeholder={data.label}
          required
          style={{ border: "1px solid #838383" }}
          className=" p-2 my-2  text-dark2 w-full font-light rounded-sm "
        />
      </div>
    );
  });
  return (
    <>
      <SweetAlert2 {...swalProps} />
      <ToastContainer transition={Zoom} autoClose={800} />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ background: `url(${largebg})` }}
        className="Login py-1 md:py-36"
      >
        <div className="md:flex scale-75 md:scale-100 flex-col items-center  justify-center">
          <div className="bg-white shadow-lg rounded-xl p-8 ">
            <h1 className="text-2xl text-primary  text-center font-semibold">
              Sign Up
            </h1>
            <form>
              <div className="my-2  block md:grid gap-7 grid-cols-2">
                {renderInputs}
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
