import { NavLink } from "react-router-dom";
import largebg from "../../../assets/largebg.png";
import { motion } from "framer-motion";
import { Inputs } from "./FormInputs";
const Register = () => {
  console.log(Inputs);
  const renderInputs = Inputs.map((data, index) => {
    return (
      <div key={data.name} className="form-input flex flex-col">
        <label htmlFor={data.label}>{data.label}</label>
        <input
          type={data.type}
          placeholder={data.label}
          style={{ border: "1px solid #838383" }}
          className=" p-2 my-2 text-dark2 w-full font-light rounded-sm "
        />
      </div>
    );
  });
  return (
    <>
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
                <button className="bg-primary block md:w-48 w-full my-2 rounded-md text-white py-2 font-mont">
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
