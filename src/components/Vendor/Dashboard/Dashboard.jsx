import { Header } from "../Header";
import Visuals from "./Visuals";
import Summary from "./Summary.json";
import { motion } from "framer-motion";
import icon1 from "../../../assets/Icon (3).png";
import icon2 from "../../../assets/Icon (4).png";
import icon3 from "../../../assets/Icon (5).png";
const Dashboard = () => {
  const icons = [icon1, icon2, icon3];
  const renderSummary = Summary.map((data, index) => {
    return (
      <div className="shadow-md relative w-full p-8 my-4  rounded-xl mr-3">
        <p className="text-dark8 font-medium"> {data.type} </p>
        <h1 className="text-black text-2xl font-bold"> {data.amount} </h1>
        <p className="text-dark8 mt-5 font-medium">
          {" "}
          <span className="text-primary-200 text-xl">
            {" "}
            {data.percent}{" "}
          </span>{" "}
          since last month{" "}
        </p>
        <span className="absolute top-0 right-0">
          <img src={icons[index]} />
        </span>
      </div>
    );
  });
  const arr = new Array(6).fill(0);
  const renderPageView = arr.map((data, index) => {
    return (
      <div className="flex m-5 justify-between items-center">
        <p>/Argon </p>
        <p>5000 </p>
        <p>319 </p>
        <p>46.513 </p>
      </div>
    );
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" mx-4 md:ml-72 md:mr-10 my-10"
      >
        <Header />
        <div className="block md:flex  justify-between ">{renderSummary}</div>
        <Visuals />
        <div className="page_visits shadow-normal rounded-2xl bg-light-400 my-5">
          <div className="flex p-3    justify-between items-center">
            <h2 className=" font-medium text-2xl">Page visits </h2>
            <button className="bg-primary text-white px-5 py-2 rounded-md">
              {" "}
              SEE ALL
            </button>
          </div>
          <div className="  ">
            <div className="flex  bg-light-500 p-3  justify-between items-center">
              <h2>PAGE NAME </h2>
              <h2> VISITORS </h2>
              <h2> UNIQUE USERS </h2>
              <h2> BOUNCE RATE </h2>
            </div>
            <div className="p-4"> {renderPageView} </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Dashboard;
