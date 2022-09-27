import user2 from "../../../assets/user2.png";
import { HiChevronDown } from "react-icons/hi";
import { Header } from "../Header";
import Footer from "../../../components/common/Footer/Footer";
import { motion } from "framer-motion";
const Dashboard = () => {
  const arr = new Array(6).fill(0);
  const renderUsers = arr.map((data) => {
    return (
      <div className="border-b-2 my-6 px-2 md:px-0 py-4 w-full block md:grid grid-cols-3  font-mono items-center md:oveflow:hidden overflow:scroll  border-solid border-grey-900">
        <div className="flex items-center">
          <div
            className="hidden md:block"
            style={{ padding: "10px", paddingLeft: "0" }}
          >
            <img className="md:w-16 hidden md:block" alt="img" src={user2} />
          </div>
          <div className="md:mx-3 mx-0">
            <p className="md:text-md font-mono my-3 md:hidden text-primary">
              USER
            </p>
            <h2 style={{ color: "#2D3748" }} className="font-semibold">
              Esther Jackson
            </h2>
            <h2>allwell@gmail.com</h2>
          </div>
        </div>
        <div className="">
          <p className="md:text-md font-mono my-3 md:hidden text-secondary">
            SUBSCRIPTION
          </p>
          <h1>17TH MAR - 17TH APRIL</h1>
        </div>
        <p className="md:text-md font-mono md:hidden text-primary  my-3 ">
          STATUS
        </p>
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
          <div className="md:text-md hidden md:grid grid grid-cols-3 font-mono my-3 text-dark1">
            <p>USERS</p>
            <p>SUBSCRIPTIONS</p>
            <p>STATUS</p>
          </div>
          <div className="grid grid-cols-2 md:block"> {renderUsers}</div>
        </div>
      </motion.div>
      <div className="block md:hidden">
        <Footer />
      </div>
    </>
  );
};
export default Dashboard;
