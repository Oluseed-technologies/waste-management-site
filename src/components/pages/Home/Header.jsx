import pickUp from "./pickup.json";
import { MdLocationOn, MdDirectionsCar, MdCalendarToday } from "react-icons/md";
import tractor from "../../../assets/tractor1.png";
import location from "../../../assets/location.png";
import calendar from "../../../assets/calendar-2.png";
import driving from "../../../assets/driving.png";
import style from "./Header.module.css";
import { motion } from "framer-motion";
const Header = () => {
  const icons = [
    <MdDirectionsCar />,
    <MdLocationOn />,
    <MdLocationOn />,
    <MdCalendarToday />,
  ];
  const renderPickups = pickUp.map((data, index) => {
    return (
      <div className="flex flex-col ">
        <label
          className="text-dark1 text-sm flex items-center font-medium"
          htmlFor={data.name}
        >
          <span className="mr-3 text-primary">{icons[index]}</span> {data.name}{" "}
        </label>
        <select
          className="text-gray-600 bg-white border-solid border-2 rounded-md my-2 px-3 py-2 border-gray-100 text-sm"
          name="type"
        >
          {data.options.map((option) => {
            return <option value="waste type">{option}</option>;
          })}
        </select>
      </div>
    );
  });
  return (
    <div
      className={`  block relative md:flex justify-between items-center h-min pl-4 pr-4  md:pl-64 my-10 md:pr-20`}
    >
      <motion.section
        initial={{
          opacity: 0,
          transform: "translateX(-20rem)",
        }}
        whileInView={{
          opacity: 1,
          transform: " translateX(0rem)",
        }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className=""
        className={` shadow-lg  bg-white  0  text-lg p-7 `}
      >
        <h2 className="font-medium text-xl">Schedule a pickup</h2>
        <p className="my-3 text-sm text-gray-600  font-rubik">
          Dispose your waste throuh hygenic means
        </p>
        {renderPickups}
        <button className="w-full bg-primary rounded-md font-mont text-white py-3">
          Fix Schedule
        </button>
      </motion.section>

      <motion.section
        initial={{
          opacity: 0,
          transform: "translateX(20rem)",
        }}
        whileInView={{
          opacity: 1,
          transform: " translateX(0rem)",
        }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className=""
        className="hidden md:block"
      >
        <img src={tractor} alt="tractor" />
      </motion.section>
    </div>
  );
};
export default Header;
