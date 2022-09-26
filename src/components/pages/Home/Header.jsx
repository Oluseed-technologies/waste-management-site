import pickUp from "./pickup.json";
import tractor from "../../../assets/tractor1.png";
import style from "./Header.module.css";
import { motion } from "framer-motion";
const Header = () => {
  const renderPickups = pickUp.map((data) => {
    return (
      <div className="flex flex-col ">
        <label className="text-dark1 text-sm font-semibold" htmlFor={data.name}>
          {data.name}
        </label>
        <select
          className="text-gray-600 border-solid border-2 rounded-md my-2 px-3 py-2 border-gray-100 text-sm"
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
        <h2 className="font-bold">Schedule a pickup</h2>
        <p className="my-3 text-sm text-gray-600  font-rubik">
          Dispose your waste throuh hygenic means
        </p>
        {renderPickups}
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
