import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../common/Logo/Logo";
import { variants, backdrop } from "../../common/Animation";
import avatar from "../../../assets/avatar.png";
import { InputComponent } from "../../common/InputComponent";
import { CompleteForm } from "./FormInputs";
import Dialog from "@mui/material/Dialog";
import ButtonComponent from "../../common/Button.component";
import Stack from "@mui/material/Stack";
const ModalComponent = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const HandleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  const [values, setValues] = useState(CompleteForm);
  console.log(values);
  const HandleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate("/vendor/dashboard");
  };
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.main
            initial={{ y: "1000" }}
            animate={{
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.8,
                type: "tween",
                ease: "circInOut",
              },
            }}
            exit={{
              y: -1000,
              opacity: 0,
              transition: {
                delay: 0.2,
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
              },
            }}
            style={{ zIndex: "100" }}
          >
            {/* <Dialog open={open} onClose={() => setOpen(false)}> */}
            <section
              className="fixed bg-white top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2  "
              // className="relative  -top-1/2 -left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: "50" }}
              //  className="w-96"
            >
              <header className="flex items-center justify-between bg-primary p-3">
                <Logo />
                <img className="md:w-auto w-10" src={avatar} alt="avatar" />
              </header>
              <form className="  md:p-5 p-5 relative ">
                <h1 className="text-dark9 font-bold capitalize md:text-2xl text-xl">
                  Create User
                </h1>
                <p className="text-dark10 text-sm">
                  Kindly complete your profile with this form to gain access to
                  your dashboard
                </p>

                <section className="my-3">
                  <div className="md:grid block grid-cols-2 gap-3 ">
                    <InputComponent
                      name="email"
                      type="email"
                      label="Email Address"
                      values={values}
                      setValues={setValues}
                    />
                    <InputComponent
                      name="phone"
                      type="number"
                      label="Phone Number"
                      setValues={setValues}
                      values={values}
                    />
                  </div>
                  <InputComponent
                    setValues={setValues}
                    values={values}
                    name="country"
                    type="text"
                    label="Country"
                  />
                  <InputComponent
                    setValues={setValues}
                    values={values}
                    name="state"
                    type="text"
                    label="State/Region"
                  />
                  <InputComponent
                    setValues={setValues}
                    values={values}
                    name="address"
                    type="text"
                    label="Residential Address"
                  />
                </section>
                <Stack justifyContent="center" direction="row" spacing={3}>
                  <ButtonComponent
                    clickHandler={HandleSubmit}
                    width="w-36"
                    bgcolor="bg-primary"
                    title="save"
                  />
                  <ButtonComponent
                    width="w-36"
                    bgcolor="bg-danger"
                    title="Cancel"
                    clickHandler={HandleClose}
                  />
                </Stack>
              </form>
            </section>
            {/* </Dialog> */}
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};
export default ModalComponent;
