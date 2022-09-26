import user2 from "../../../assets/user2.png";
import { HiChevronDown } from "react-icons/hi";
import { Header } from "../Header";
import Footer from "../../../components/common/Footer/Footer";
import { motion } from "framer-motion";
const Dashboard = () => {
  const arr = new Array(6).fill(0);
  const renderUsers = arr.map((data) => {
    return (
      <div className="border-b-2 my-6 py-4 w-full  grid-cols-3 grid font-mono items-center md:oveflow:hidden overflow:scroll  border-solid border-grey-900">
        <div className="flex items-center">
          <div style={{ padding: "10px", paddingLeft: "0" }}>
            <img className="md:w-16 hidden md:block" alt="img" src={user2} />
          </div>
          <div className="mx-3">
            <h2 style={{ color: "#2D3748" }} className="font-semibold">
              Esther Jackson
            </h2>
            <h2>allwell@gmail.com</h2>
          </div>
        </div>
        <div className="">
          <h1>17TH MAR - 17TH APRIL</h1>
        </div>
        {/* <div className="bg-primary rounded-2xl text-white text-center "> */}
        <div>Active </div>
        {/* <td>
            <HiChevronDown />
          </td> */}
        {/* </td> */}
      </div>
    );
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" mx-4 md:ml-72 md:mr-10 my-1"
      >
        <Header />

        <h1 className="text-3xl font-bold text-dark7">Accounts</h1>
        <div className="my-5 ">
          <div className="md:text-md font-mono grid-cols-3  grid   text-dark1">
            <p className="">USERS</p>
            <p className="">SUBSCRIPTION</p>
            <p className="">STATUS</p>
          </div>

          {renderUsers}
        </div>
      </motion.div>
      <div className="block md:hidden">
        <Footer />
      </div>
    </>
  );
};
export default Dashboard;
